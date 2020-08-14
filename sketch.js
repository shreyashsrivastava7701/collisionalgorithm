var fixedRect, movingRect;
var firstSq, secondSq;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 150, 100);
  movingRect = createSprite(600, 400, 50, 100);
  firstSq = createSprite(700, 10, 30, 30);
  secondSq = createSprite(700, 500, 30, 30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  firstSq.shapeColor = "yellow";
  secondSq.shapeColor = "aqua";

  firstSq.velocityY = 10;
  secondSq.velocityY = -10;

  /*movingRect.debug = true;
  fixedRect.debug = true;*/
}

function draw() {
  background(0,0,0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2)
{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
} else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2)
{
 firstSq.velocityY = firstSq.velocityY * (-1);
 secondSq.velocityY = secondSq.velocityY * (-1); 
}
  drawSprites();
}