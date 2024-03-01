let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl1 = document.getElementById("length-el1");
let lengthEl2 = document.getElementById("length-el2");
let lengthEl3 = document.getElementById("length-el3");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value); // Convert the input value to a number, ensuring calculations are correct
    
    // Ensure the values are converted to numbers and then formatted to three decimals
    lengthEl1.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${(baseValue * meterToFeet).toFixed(3)} feet = ${baseValue.toFixed(3)} meters`;

    lengthEl2.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${(baseValue * literToGallon).toFixed(3)} gallons = ${baseValue.toFixed(3)} liters`;

    lengthEl3.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${(baseValue * kiloToPound).toFixed(3)} pounds = ${baseValue.toFixed(3)} kilos`;
});
