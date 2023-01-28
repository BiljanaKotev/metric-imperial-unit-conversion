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

convertBtn.addEventListener("click", valueConversion);

function valueConversion() {
  let inputValue = inputUnit.value;
  const meterToFeetConversion = inputValue * meterToFeet;
  const feetToMeterConversion = inputValue * feetToMeter;
  const literToGallonConversion = inputValue * literToGallon;
  const gallonToLiterConversion = inputValue * gallonToLiter;
  const kiloToPoundConversion = inputValue * kiloToPound;
  const poundToKiloConversion = inputValue * poundToKilo;

  lengthMeasurement.innerHTML = `${inputValue} meters = ${meterToFeetConversion.toFixed(3)} feet | ${inputValue} feet = ${feetToMeterConversion.toFixed(3)} meters`;

  volumeMeasurement.innerHTML = `${inputValue} liters = ${literToGallonConversion.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiterConversion.toFixed(3)} liters`;

  massMeasurement.innerHTML = `${inputValue} kilos = ${kiloToPoundConversion.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKiloConversion.toFixed(3)} kilos`;
}

valueConversion();
