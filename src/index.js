"use strict";

const meterToFeet = 3.281;
const feetToMeter = 0.304;
const literToGallon = 0.264;
const gallonToLiter = 3.785;
const kiloToPound = 2.204;
const poundToKilo = 0.453;

let inputUnit = document.querySelector("#input-unit");
let convertBtn = document.querySelector("#convert-btn");
let lengthMeasurements = document.querySelector("#length-measurements");

convertBtn.addEventListener("click", function () {
  let inputValue = inputUnit.value;
  lengthMeasurements.innerHTML = `${inputValue} meters = ${
    inputValue * meterToFeet
  } feet | ${inputValue} feet = ${inputValue * feetToMeter} meters`;
});
