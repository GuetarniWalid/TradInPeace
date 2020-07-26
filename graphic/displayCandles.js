import config from '/graphic/config.js'
import { drawCandle } from '/graphic/candle.js'


export function displayCandles(candles) {
    //variables declaration to populate parameters of drawCandle function
    let x = 0
    let y
    const width = config.candleWidth
    let height
    let direction
    let upWickSize
    let downWickSize
    const unit = drawingSize(candles).unit
    const max = drawingSize(candles).max

    //Loop on candles's array
    for (const candle of candles) {
        direction = candleDirection(candle)
        height = candleHeight(candle, unit)
        y = yAxis(candle, direction, height, unit, max)
        upWickSize = wickSize(candle, unit, 'up')
        downWickSize = wickSize(candle, unit, 'down')

        drawCandle(x, y, width, height, direction, upWickSize, downWickSize)
        x += config.candleSpace
    }
}



/**** All functions for displayCandles ****/

function candleHeight(candle, unit) {
    return Math.abs(candle[1] - candle[4]) * unit
}


function candleDirection(candle) {
    return (candle[4] - candle[1]) >= 0 ? 'up' : 'down'
}


function drawingSize(candles) {
    const hights = candles.map(arr => arr[2])
    const max = Math.max(...hights)

    const lows = candles.map(arr => arr[3])
    const min = Math.min(...lows)

    //Determine the total size in which all the candles will be contained 
    const unit = (config.graphicHeight * config.drawingSize) / (max - min)
    return {
        unit: unit,
        max: max
    }
}


function yAxis(candle, direction, height, unit, max) {
    //Position relative to the top of the canvas
    if(direction === 'up') {
        return config.graphicHeight * ((1 - config.drawingSize) / 2) + (max - candle[1]) * unit - height
    }
    else {
        return config.graphicHeight * ((1 - config.drawingSize) / 2) + (max - candle[1]) * unit
    }
}


function wickSize(candle, unit, side) {
    if(side === 'up') return (candle[2] - Math.max(candle[1], candle[4])) * unit
    else return (Math.min(candle[1], candle[4]) - candle[3]) * unit
}
