let brush = document.getElementById("c").getContext("2d")
let w = 400 //width of canvas 
let h = 400 //height of canvas 
let birdX = 50
let birdY = 200
let birdDy = 0 // delta increasement along y axis in each interval 
let birdSize = 20 
let g = 1 //gravity 
let jumpImpact = 20 // speed increasement along y axis when you press space 
let timerId = null;
let pipes = [[100,50,50,100],[300,100,50,80],[500,80,40,50]] // element is an array of four data [x, y, w, h] of the pass 
let pipeDx= 2
let score = 0
document.addEventListener("keydown", onkeydown)
drawFrame()
function isXyInRect(x, y, rx, ry, rw, rh){
    if(x > rx && x < rx+rw && y > ry && y < ry+rh){
      return true
    } else {
      return false
    }
}
function gameOver(){
  clearInterval(timerId)
  brush.fillStyle = "#000000"
  brush.textAlign = "center"
  brush.textBaseline = "top"
  brush.font = "30px Arial"
  brush.fillText("GAME OVER", w/2, h/2)
}
function processCollision(){
  for (let i = 0; i < pipes.length; ++i){
    let pipe = pipes[i] //[100,50,50,100]
    if (isXyInRect(birdX,birdY,pipe[0],0,pipe[2],pipe[1])||
        isXyInRect(birdX+birdSize,birdY, pipe[0],0, pipe[2],pipe[1])||
        isXyInRect(birdX, birdY+birdSize,pipe[0],pipe[1] +pipe[3], pipe[2], h-pipe[1]-pipe[3])||
        isXyInRect(birdX+birdSize, birdY+birdSize, pipe[0],pipe[1]+pipe[3], pipe[2], h-pipe[1]-pipe[3])) {
          gameOver()
          break 
    }  
  }
  // if the bird hits the top edge, if the bird hits the bottom edge 
  if (birdY <= 0 || birdY >= h) {
    gameOver()
  }
}
function drawPipes(){
  brush.fillStyle = "#00FF00"
  for (let i = 0; i < pipes.length; ++i){
      let pipe = pipes[i] //[100,50,50,100]
    //draw the upper pipes 
    brush.fillRect(pipe[0],0,pipe[2],pipe[1])
    //draw the lower pipes 
    brush.fillRect(pipe[0],pipe[1]+pipe[3],pipe[2],h-pipe[1]-pipe[3])
  }
}
function onkeydown (e){
  if(e.key === "Enter"){
    resetData()
    clearInterval(timerId)
    timerId = setInterval (drawFrame, 20) 

  } else if (e.key === " "){
    birdDy -= jumpImpact
  }
}
function resetData(){
  birdY = 200
  birdDy = 0
  score = 0
  pipes = [[150,50,50,100],[300,100,50, 80],[500,80,40, 50]]
  document.getElementById("Score").innerHTML = "Score: " + score
}
function drawFrame(){
  updateData()
  drawBackground()
  drawPipes()
  drawBird()
  processCollision()
}
function updateData(){
  birdDy += g // speed increasement by the gravity 
  birdY += birdDy // y position increasement 
  //update the pipes
  for (let i = 0; i < pipes.length; ++i){
    let pipe = pipes[i] //[100,50,50,100]
    pipe [0] -= pipeDx
    if (pipe[0]+pipe[2] <= 0){
      pipe[0] = w + Math.floor(Math.random()*50 + 50) 
      ++score
      document.getElementById("h").innerHTML = "Score:" + score
    }
  } 
}
function drawBird(){
  brush.fillStyle = "#FF0000" //bird
  brush.fillRect(birdX, birdY, birdSize, birdSize)
}
function drawBackground (){
  brush.fillStyle = "#85C1E9" //sky 
  brush.fillRect(0, 0, w, 12/16*h )
  brush.fillStyle = "#000000" //separator 
  brush.fillRect(0, 12/16*h, w, 1/16*h)
  brush.fillStyle = "#F5B041" //ground 
  brush.fillRect(0, 13/16*h, w, 3/16*h)
}