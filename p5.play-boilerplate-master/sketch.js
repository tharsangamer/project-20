var fixedRect,movingRect


function setup() {
  createCanvas(1000,400);
  fixedRect= createSprite(900, 200, 10, 200);
  fixedRect.shapeColor = "blue";

  movingRect=createSprite(1000,100,50,10);
  movingRect.shapeColor= "green";
  
}

function draw() {
  background("black");  

movingRect.x = mouseX;
movingRect.y = mouseY;


 
drawSprites();



  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y- fixedRect.y< movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }  
}