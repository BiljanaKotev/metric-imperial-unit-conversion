"use strict";

const meterToFeet = 3.281;
const feetToMeter = 0.3048;
const literToGallon = 0.264;
const gallonToLiter = 3.785;
const kiloToPound = 2.205;
const poundToKilo = 0.454;

let inputUnit = document.querySelector("#input-unit");
const convertBtn = document.querySelector("#convert-btn");
const lengthMeasurement = document.querySelector("#length-measurement");
const volumeMeasurement = document.querySelector("#volume-measurement");
const massMeasurement = document.querySelector("#mass-measurement");

convertBtn.addEventListener("click", function () {
  let inputValue = inputUnit.value;

  lengthMeasurement.innerHTML = `${inputValue} meters = ${
    inputValue * meterToFeet.toFixed(3)
  } feet | ${inputValue} feet = ${inputValue * feetToMeter.toFixed(4)} meters`;

  volumeMeasurement.innerHTML = `${inputValue} liters = ${
    inputValue * literToGallon.toFixed(3)
  } gallons | ${inputValue} gallons = ${
    inputValue * gallonToLiter.toFixed(3)
  } liters`;

  massMeasurement.innerHTML = `${inputValue} kilos = ${
    inputValue * kiloToPound.toFixed(3)
  } pounds | ${inputValue} pounds = ${
    inputValue * poundToKilo.toFixed(3)
  } kilos`;
});

console.log(typeof feetToMeter);
