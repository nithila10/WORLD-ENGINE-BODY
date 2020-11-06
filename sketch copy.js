// Name Spacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, object, ball; 

function setup() {
  createCanvas(400,400);

  // Create Engine
  engine = Engine.create();
  world = engine.world;

  // Create Bodies 
  var object_options = {
    isStatic: true
  }
  object = Bodies.rectangle(200,380, 600, 20, object_options);
  
  // To add to your own world
  World.add(world, object);
var ball_options = {
  restitution: 6.0
}
  ball = Bodies.circle(100, 370, 40, ball_options);
  World.add(world, ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER)
//rect(200,200,50,50)
  rect(object.position.x, object.position.y, 600,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 40)
  drawSprites();
} 

everything is froompy
