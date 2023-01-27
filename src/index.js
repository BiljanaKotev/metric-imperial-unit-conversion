"use strict";

const meterToFeet = (3.281).toFixed(2);
const feetToMeter = (0.3048).toFixed(2);
const literToGallon = (0.264).toFixed(2);
const gallonToLiter = (3.785).toFixed(2);
const kiloToPound = (2.205).toFixed(2);
const poundToKilo = (0.454).toFixed(2);

let inputUnit = document.querySelector("#input-unit");
const convertBtn = document.querySelector("#convert-btn");
const lengthMeasurement = document.querySelector("#length-measurement");
const volumeMeasurement = document.querySelector("#volume-measurement");
const massMeasurement = document.querySelector("#mass-measurement");

convertBtn.addEventListener("click", function () {
  let inputValue = inputUnit.value;

  lengthMeasurement.innerHTML = `${inputValue} meters = ${
    inputValue * meterToFeet
  } feet | ${inputValue} feet = ${inputValue * feetToMeter} meters`;

  volumeMeasurement.innerHTML = `${inputValue} liters = ${
    inputValue * literToGallon
  } gallons | ${inputValue} gallons = ${inputValue * gallonToLiter} liters`;

  massMeasurement.innerHTML = `${inputValue} kilos = ${
    inputValue * kiloToPound
  } pounds | ${inputValue} pounds = ${inputValue * poundToKilo} kilos`;
});
