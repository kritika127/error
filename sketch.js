var left
var right
var table

function preload(){
table=loadImage("assets/table.png")
player1=loadImage("assets/right.png")
computer=loadImage("assets/left.png")  
}
function setup() {
  createCanvas(800,400);

  table=createSprite(22,173,93,180)
  table.addImage(table)
  player1=createSprite(97,33,240,70)
  //player1.addImage("player1",player1)
  computer=createSprite(256,98,87,304)
  //computer.addImage("computer",computer)

}
function draw() {
  background(255,255,255);  
  drawSprites();
}