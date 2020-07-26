'use strict'
import { displayCandles } from '/graphic/displayCandles.js'

let test = {};

fetch('http://localhost:5500/')
    .then(response => response.json())
    .then(data => {
        displayCandles(data)
        candleHeight(data);
    })
    .catch(error => console.log(error))



export { drawCandle } from '/graphic/candle.js'
