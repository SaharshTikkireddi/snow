const Engine=Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImage;

function preload(){
backgroundImage =loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world;

  snow = new Snow(400,200,50,50)

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);  
  snow.display();
  

  drawSprites();
}

