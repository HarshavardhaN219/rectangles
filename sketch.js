var rectangle1;
var rectangle2;

function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(200,200,20,40);
  rectangle1.shapeColor="red";
  rectangle2=createSprite(100,200,40,20);
  rectangle2.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  rectangle2.y=World.mouseY; 
  rectangle2.x=World.mouseX; 
  console.log(rectangle1.x-rectangle2.x)
  if(rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2&&
    rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2&&
    rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2&&
    rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2){
  rectangle1.shapeColor="blue";
  rectangle2.shapeColor="blue";
  }
  else{
    rectangle1.shapeColor="red"
    rectangle2.shapeColor="red"
  }
  drawSprites();
}