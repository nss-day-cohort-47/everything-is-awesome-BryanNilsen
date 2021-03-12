const materials = ["Solid", "Transparent", "Pearl", "Chrome", "Metallic", "Milky", "Glitter", "Speckle", "Ink", "Process", "Modulex"]
export const SelectMaterial = () => {
    const selectContainer = document.querySelector("#filterMaterial")
    const options = materials.map(material => `<option value="${material}">${material}</option>`).join("")

    selectContainer.innerHTML = `
    <option value="0">Select Material</option>
    ${options}
    `
}