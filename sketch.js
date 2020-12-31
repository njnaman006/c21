var car,wall;
var bike1,bike2;

function setup() {
  createCanvas(1200,800);
  car= createSprite(400, 100, 50, 80);
  car.shapeColor = "green";
  car.debug = true;
  wall = createSprite(400, 500,80,30);
  wall.shapeColor = "red";
  wall.debug = true;

 // wall.velocityY = -5;
 car.velocityY = +5;
}

function draw() {
  background(0,0,0);
bounceOff(car,wall);

  drawSprites();
}

