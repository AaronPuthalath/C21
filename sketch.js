var fixedRect, moveRect;

function setup() {
  createCanvas(innerWidth,innerHeight);
  fixedRect=createSprite(innerWidth/2, innerHeight/2, 50, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor = "blue";
  moveRect=createSprite(200, 300, 25, 46);
  moveRect.debug = true;
  moveRect.shapeColor = "blue";
}

function draw() {
  background(51);  
  moveRect.x=mouseX;
  moveRect.y=mouseY;

  if(moveRect.x-fixedRect.x <= moveRect.width/2 + fixedRect.width/2 &&
     fixedRect.x-moveRect.x <= moveRect.width/2 + fixedRect.width/2 &&
     fixedRect.y-moveRect.y <= moveRect.height/2 + fixedRect.height/2 &&
     moveRect.y-fixedRect.y <= moveRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    moveRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    moveRect.shapeColor = "blue";
  }
  drawSprites();
}