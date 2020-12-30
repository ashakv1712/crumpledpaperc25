
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var d1, d2, d3;
var paper;
var ground;

function preload() {

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	d1 = new Dustbin(1300, 665, 170, 20);
	d2 = new Dustbin(1205, 615, 20, 120);
	d3 = new Dustbin(1395, 615, 20, 120);

	ground = new Dustbin(800, 680, 1600, 20);

	paper = new Paper(100, 360, 45);

}


function draw() {

	background(0);
	Engine.update(engine);

	d1.display();
	d2.display();
	d3.display();
	paper.display();
	ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 55, y: -200 });
	}

}



