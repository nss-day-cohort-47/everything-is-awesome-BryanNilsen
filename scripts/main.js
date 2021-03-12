console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
    if (event.target.id === "showAll") {
        makeLegoList(useLegos())
    } else if (event.target.id.startsWith("show")) { // flexible for any color
        const color = event.target.id.split("show")[1]
        filterLegos(color)
    }
})

const filterLegos = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.LegoName.includes(whatFilter)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}


const startEIA = () => {
    loadLegos()
        .then(legoArray => {
            makeLegoList(legoArray)
        })

}

startEIA();