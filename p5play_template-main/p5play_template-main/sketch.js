var guardachuva;
function setup() {
  createCanvas(400,400);
guardachuva=createSprite(200,200,30,30);
}
function draw() 
{
  background("black");

if(keyIsDown(UP_ARROW)){
guardachuva.position.y-=9999999999999999999999999;
}
}





