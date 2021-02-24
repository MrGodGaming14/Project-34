const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage

var ground, hero;

function preload() {
backgroundImage = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,300,700,15);
  hero = new Hero(150, 300)

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero.display();

}

