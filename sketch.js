const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.body;

let engine;
let world;
var paper1,ground,dustbin1,dustbin2,dustbin3;

function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);
  engine = Engine.create();
   world = engine.world;

paper1 = new paper(700,600,10);
ground = new ground(800,680,1600,20);
dustbin1 = new Dustbin(1300,660,100,20);
dustbin2 = new Dustbin(1240,620,20,100);
dustbin3 = new Dustbin(1350,620,20,100);

Engine.run(engine);
  
}

function draw() 
{
  ractMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
paper1.display();

  Engine.update(engine);
}
function keyPressed(){
  if(keycode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
  }
}