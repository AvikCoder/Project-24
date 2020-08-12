
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,650,20)
    dust1 = new Dustbin(650,650,150,20)
    dust2 = new Dustbin(575,600,20,100)
    dust3 = new Dustbin(725,600,20,100)
    ground = new Ground(400,670,800,20)
    

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ground.display();
 
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70});
  }
}

