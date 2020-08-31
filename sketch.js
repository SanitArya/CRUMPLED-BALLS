const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ballI;

var grnd;

var blk1,blk2,blk3;

var dustbin;

function setup() {
	createCanvas(1360, 400);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,200,40,40);

	grnd = new Block(800,410,1600,20);

	blk1 = new Block(1150,325,10,120);

	blk2 = new Block(1045,380,200,10);

	blk3 = new Block(940,325,10,120);

    dustbin = new Dustbin(1050,325,250,140);

    slingshot = new Slingshot(ball.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball.display();
  grnd.display();
  blk1.display();
  blk2.display();
  blk3.display();
  dustbin.display();
  slingshot.display();


  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

  slingshot.fly();
}