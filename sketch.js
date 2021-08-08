const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  World.add(world,playerBase);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 World.add(world,player);
  

  computerBase = new ComputerBase(

    width - 300,
    random(450, height - 300),
    180,
    150)
    World.add(world,computerBase)
  
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180)
  World.add(world,computer)
}
  
function draw() {

  background(180);
Engine.update(engine);
  fill("black");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
   playerBase.display()
   computerBase.display()
   player.display()
   computer.display()
   



 
  
   


}

