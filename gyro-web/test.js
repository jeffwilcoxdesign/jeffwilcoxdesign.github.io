import {setupGyro} from "./closure.js";

let btn;

// define method for handling of gyro data
const dataHandler = (event) => {
    const { alpha, beta, gamma } = event.rotationRate;
    console.log(event);
    btn.textContent = alpha+', '+beta+', '+gamma;
}

document.addEventListener('DOMContentLoaded', () => {
    // set element for requesting permission and data handling method
    btn = document.getElementById('btn');
    setupGyro(btn, dataHandler);
});