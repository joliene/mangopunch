const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy1,stone1,tree1,ground1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var rope1;

function setup() {
	createCanvas(1360, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(680,550,1360,15);
	tree1 = new Tree(1150,300,400,500);
	boy1 = new Boy(300,500,100,200);
	stone1 = new Stone(260,450,70,70);
	mango1 = new Mangoes(1100,300,50,50);
	mango2 = new Mangoes(1300,200,50,50);
	mango3 = new Mangoes(1200,250,50,50);
	mango4 = new Mangoes(1050,200,50,50);
	mango5 = new Mangoes(1150,170,50,50);
	mango6 = new Mangoes(975,280,50,50);
	mango7 = new Mangoes(1300,300,50,50);
	mango8 = new Mangoes(1200,100,50,50);
	rope1 = new Rope(boy1.body,stone1.body);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lavender");
  ground1.display();
  tree1.display();
  boy1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mouseReleased()
  touching()
  strokeWeight(3)
  line(boy1.body.position.x-30,boy1.body.position.y-50,stone1.body.position.x,stone1.body.position.y)
 // keyPressed();
 // detectcollsion(stone1,mango1);
  /*detectcollsion(stone1,mango2);
  detectcollsion(stone1,mango3);
  detectcollsion(stone1,mango4);
  detectcollsion(stone1,mango5);
  detectcollsion(stone1,mango6);
  detectcollsion(stone1,mango7);
  detectcollsion(stone1,mango8);*/
  drawSprites();
 //text("PRESS SPACE FOR A CHANCE"(500,300))
 //textsize(40)
 //stroke("black")
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stone1.body,{x:260,y:450})
	rope1.attach(stone.body)
}
}

function detectcollsion(stone1,mango1){
mangoBodyPosition=mango1.body.position
stoneBodyPosition=stone1.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango1.r+stone1.r){
	Matter.Body.setStatic(mango1.body,false)
}
		}


function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
		
		
function mouseReleased(){
	rope1.fly();
	}

function touching(){
	//if(mango1.x-stone1.x<(stone1.width+mango1.width)/2) {
		if(mango1.x-stone1.x<(stone1.width+mango1.width/2)){
		Matter.Body.setStatic(mango1.body,false)
	}
	/*if(stone1.istouching(mango1)){
		Matter.Body.setStatic(mango1.body,false)
	}*/
}