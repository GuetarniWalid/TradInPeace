'use strict'

//Get Context
const canvas = document.getElementById('graphic')
const ctx = canvas.getContext('2d')

//Draw Candles
export function drawCandle(x, y, width, height, direction, upWickSize, downWickSize) {
    bodyCandle(x, y, width, height, direction)
    wickCandleUp((x + width/2), y, upWickSize)
    wickCandleDown((x + width/2), (y + height), downWickSize)
}


function bodyCandle(x, y, width, height, direction) {
    direction === 'up' ? ctx.fillStyle='rgb(5, 138, 5)' : ctx.fillStyle='rgb(226, 17, 17)'
    ctx.strokeStyle='rgb(0, 0, 0)'
    ctx.fillRect(x, y, width, height)
    ctx.strokeRect(x, y, width, height)
}

function wickCandleUp(x, y, upWickSize) {
    const wickHeight = y - upWickSize
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, wickHeight);
    ctx.stroke();
}

function wickCandleDown(x, y, downWickSize) {
    const wickHeight = y + downWickSize
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, wickHeight);
    ctx.stroke();
}