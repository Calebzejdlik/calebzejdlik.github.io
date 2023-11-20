let brush = document.getElementById("c").getContext("2d")
let w = 400
let h = 400
let size = 20 
let squares = [[10, 0, 20, 10],[40, 0, 30, 15],[200, 0, 10, 20]] // [ [x1 , y1, dx1, dy1], ...]]
drawBackground()
setInterval(drawFrame, 200)
function drawFrame(){
    updateData()
    drawBackground()
    drawSquare()
}
function updateData(){
    for (let i = 0; i < 3; ++i) {
        squares[i][0] -= squares[i][2]
        if (squares [i][0] < 0) {
            squares [i][0] = w
            squares  [i][1] += squares[i][3]
        }
        if (squares [i][1] > w){
            squares [i][1] = 0
        }
    }
}
function drawSquare(){
    brush.fillStyle = "#00FF00"
for (let i = 0; i < squares .length; ++i){
    let x = squares [i][0]
    let y = squares  [i][1]
    brush.fillRect(x, y, size, size)
}
}

function drawBackground(){
    brush.fillStyle = "#000000"
    brush.fillRect(0, 0, w, h)
}