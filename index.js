/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumEl = document.getElementById("input-number");
const convertBtn = document.getElementById("convert-btn");
const lengthParagraph = document.getElementById("convert-length");
const volumeParagraph = document.getElementById("convert-volume");
const massParagraph = document.getElementById("convert-mass");

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.78541;
const kilogramToPound = 2.204;
const poundToKilogram = 0.453592;

convertBtn.addEventListener("click", function () {
  let baseValue = inputNumEl.value;

  lengthParagraph.innerHTML = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet =  ${(baseValue * feetToMeter).toFixed(3)} meters`;

  volumeParagraph.innerHTML = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue * gallonToLiter).toFixed(3)} liters`;

  massParagraph.innerHTML = `${baseValue} kilogram = ${(baseValue * kilogramToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue * poundToKilogram).toFixed(3)} kilograms`;
});
