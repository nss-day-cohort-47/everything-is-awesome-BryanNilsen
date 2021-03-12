console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';
import { SelectMaterial } from './legos/SelectMaterial.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
    if (event.target.id === "showAll") {
        makeLegoList(useLegos())
    } else if (event.target.id.startsWith("show")) { // flexible for any color
        const color = event.target.id.split("show")[1]
        filterLegos("LegoName", color)
    }
})
navElement.addEventListener("change", (event) => {
    if (event.target.id === "filterMaterial") {
        const material = event.target.value
        if (material !== "0") {
            filterLegos("Material", material)
        } else {
            makeLegoList(useLegos())
        }

    } else if (event.target.id.startsWith("show")) { // flexible for any color
        const color = event.target.id.split("show")[1]
        filterLegos(color)
    }
})

navElement.addEventListener("keyup", event => {
    if (event.target.id === "searchLegoId" && event.code === 'Enter') {
        const searchTerm = event.target.value
        if (searchTerm !== "") {
            const foundLegos = useLegos().filter(lego => lego.LegoId === searchTerm)
            foundLegos.length !== 0 ? makeLegoList(foundLegos) : alert("No match, try again")
        } else {
            makeLegoList(useLegos())
        }
    }
})

const filterLegos = (property, value) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego[property].includes(value)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}


const startEIA = () => {
    loadLegos()
        .then(legoArray => {
            makeLegoList(legoArray)
            SelectMaterial()
        })

}

startEIA();