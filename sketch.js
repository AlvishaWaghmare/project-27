
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=  new roof(400,250,230,20);
	bob1Object = new bob(320,575,40)
	bob2Object=  new bob(360,575,40)
	bob3Object = new bob(400,575,40)
	bob4Object = new bob(400,575,40)
	bob5Object = new bob(450,575,40)
	



	
	rope1=new rope(bob1Object.body,roofObject.body,-80, 0)
	World.add(world,rope1)

	rope2=new rope(bob2Object.body,roofObject.body,-40, 0)
	World.add(world,rope2)

	rope3=new rope(bob3Object.body,roofObject.body,0, 0)
	World.add(world,rope3)

	rope4=new rope(bob4Object.body,roofObject.body,+50, 0)
	World.add(world,rope4)

	rope5=new rope(bob5Object.body,roofObject.body,+100, 0)
	World.add(world,rope5)
	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  bob1Object.display();
  bob2Object.display();
  bob3Object.display();
  bob4Object.display();
  bob5Object.display();
 
  
 
}

function KeyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1Object.body,bob1Object.body.position,{x:-500,y:-45});
		

	}
}






