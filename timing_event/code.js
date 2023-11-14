let canvas_element = document.getElementById("c1")
let brush = canvas_element.getContext("2d")
let i = 10 
let timer1 = setInterval(countdown, 1000)

function drawBackground () {
    brush.fillStyle = "#00FF00"
    brush.fillRect(0, 0, 400, 400 )
}

function countdown (){
    drawBackground ()
    brush.fillStyle = "#000000"
    brush.textBaseline = "top"
    brush.font = "100px Arial"
    brush.fillText(""+i, 100, 100)
    --i;
    if (i === 0) {
        clearInterval(timer1)
    }
}