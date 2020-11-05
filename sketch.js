var fixrect,movingrect



function setup() {

  createCanvas(800,400);
  fixrect = createSprite (400,200,80,30);
  movingrect = createSprite (500,200,30,80);
  fixrect.shapeColor = "blue";
  movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
movingrect.x = mouseX
movingrect.y = mouseY


  drawSprites();
}  
