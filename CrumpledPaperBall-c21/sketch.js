
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballObject, groundObject, leftGroundObject, rightGroundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ballObject = new Ball(200, 600, 20);
	leftGroundObject = new Ground(800, 680, 10, 200);
	rightGroundObject = new Ground(950, 680, 10, 200);
	groundObject = new Ground(width/2, height, width, 40);

	Engine.run(engine);
  
}


function draw() {
  
	background(0);
	ballObject.display();
	leftGroundObject.display();
	rightGroundObject.display();
	groundObject.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ballObject.body,ballObject.body.position, {x : 70, y : -70});

	}

}



