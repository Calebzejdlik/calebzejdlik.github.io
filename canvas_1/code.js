let canvas = document.getElementById("c1")
let painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(0, 0, 400, 400)
painter.fillStyle = "#0000ff"

let y = 10
for (let j = 0; j < 13; ++j){
    let x = 10 
    for(let i = 0; i < 13; i = i + 1) {
        painter.fillRect(x, y, 20, 20)
        x = x + 30
    }
    y = y + 30 
}
let canvas2 = document.getElementById("c2")
let painter2 = canvas2.getContext("2d")
painter.fillStyle = "#000000"
painter2.fillRect(0, 0, 600, 600)

painter2.fillStyle = "#0000ff"

let i = 0;
while (i < 13){
    let c = 0;
    while (c < 13){
        if (c <= i) {
            painter2.fillRect(10 + c * 30, 10 + i * 30, 20, 20);
        }
        c++;
    }
    i++;
}