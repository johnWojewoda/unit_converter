let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl1 = document.getElementById("length-el1")
let lengthEl2 = document.getElementById("length-el2")
let lengthEl3 = document.getElementById("length-el3")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl1.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue * meterToFeet} feet = ${baseValue} meters` 

    lengthEl2.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons | ${baseValue * literToGallon} gallons = ${baseValue} liters` 

    lengthEl3.textContent = `${baseValue} kilos = ${baseValue * kiloToPound} pounds | ${baseValue * kiloToPound} pounds = ${baseValue} kilos` 
})
