let brush = document.getElementById("c1").getContext("2d")
let w = 400 // width of canvas 
let h = 400 // height of canvas 
let size = 20 // size of the square
let x = w/2 - size/2 // x of square
let y = 0 // y of square 
let dy = 5 // increase along y 
let dx = 5 // increase along x 
let jumpImpact = 20 // the speed increase
let g = 1 // gravity 
let timer = null // timer id
let isLeft = false 
let isRight = false 
let isOnGround = false 

let bulletX = x
let bulletY = y 
let bulletDy = 20
let isFire = false 
let bulletSize = 7

function drawBullet () {
    brush.fillStyle = "#FF0000"
    brush.fillRect (bulletX, bulletY, bulletSize, bulletSize)
}

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup )
drawBackground()
drawSquare()

function drawSquare () {
    brush.fillStyle = "#000000"
    if (x < 0) {
        brush.fillRect(x, y, size, size) // left part 
        brush.fillRect(w+x, y, size, size) // right part
    } else if(x > w - size) {
        brush.fillRect(x, y, size, size) // right part 
        brush.fillRect(x-w, y, size, size) // left part 
    } else {
        brush.fillRect(x, y, size, size)
    } 
}

function drawFrame (){
    // update all the data that need to be updated 
    if (isFire){
        bulletY -= bulletDy
    } else {
        bulletX = x
        bulletY = y 
    }
    if (bulletY < 0){
        isFire = false
    }

    dy += g 
    y += dy

    if (isLeft) {
        x -= dx
    }
    if (isRight) {
        x += dx
    }

    if( y > h - size){
        y = h - size;
        dy = 0 
        isOnGround = true 
    } else {
        isOnGround = false
    }

    if (x < -size){
        x = w-size 
    }
    if(x > w){
        x = 0
    }
    drawBackground()
    drawSquare()
    drawBullet()
}

function drawBackground () {
    brush.fillStyle = "#AAAAAA"
    brush.fillRect(0, 0, w, h)
}

function onkeydown(e) {
    if(e.key === "Enter"){
        clearInterval(timer) 
        y = 0
        timer= setInterval(drawFrame, 20)
    } else if (e.key === "ArrowLeft"){
        isLeft = true 
    } else if (e.key === "ArrowRight"){
        isRight = true  
    } else if (e.key === " ") {
        if (isOnGround) {
            dy -= jumpImpact
        }
    } else if (e.key === "f") {
        isFire = true 
    }
}

function onkeyup(e) {
    if (e.key === "ArrowLeft"){
        isLeft = false 
    } else if (e.key === "ArrowRight"){
        isRight = false 
    } else if (y === h - size) {

    }
}