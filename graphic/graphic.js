'use strict'
import {drawCandle} from '/graphic/candle.js'
import config from '/graphic/config.js'

let test = {};

fetch('http://localhost:5500/')
    .then(response => response.json())
    .then(data => {
        numberOfCandle(data)
        candleHeight(data);
    })
    .catch(error => console.log(error))


function numberOfCandle(candles) {
    let x = 0
    for(const candle of candles) {
        drawCandle(x, 200, 10, 50, 'up', 25, 30)
        x += 15
    }
}

function candleHeight(candles) {
    test.height = []
    for(const candle of candles) {
        const height = (candle[4] - candle[1]) * config.height * 1000
        test.height.push(height)
    }
    console.log(test.height)
}


export {drawCandle} from '/graphic/candle.js'
