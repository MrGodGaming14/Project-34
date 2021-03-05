const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage

var ground, hero;
var gameState = 0;

var monster, monsterImage;
function preload() {
backgroundImage = loadImage("images/GamingBackground.png");

monsterImage = loadImage("images/Monster-01.png")

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,300,700,15);
  hero = new Hero(155, 148, 371, 128)

  fly1 = new Fly(hero.body, {x:165, y:82});

  box1 = new Block(390, 120, 50, 50)
  box2 = new Block(390, 120, 50, 50);
  box3 = new Block(440, 120, 50, 50)
  box4 = new Block(440, 120, 50, 50);
  box5 = new Block(490, 120, 50, 50)
  box6 = new Block(490, 120, 50, 50);
  box7 = new Block(540, 120, 50, 50)
  box8 = new Block(540, 120, 50, 50);

  //top row
  box9 = new Block(390, 170, 50, 50)
  box10 = new Block(440, 170, 50, 50)
  box11 = new Block(490, 170, 50, 50)
  box12 = new Block(540, 170, 50, 50)

  monster = createSprite(600, 200, 100 ,	240)
	monster.addImage(monsterImage)
//	monster.scale = 0.2;

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

drawSprites();
}

function mouseDragged(){
 if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    
}
}

