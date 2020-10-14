const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22;
var player;
var stand;
var sling;
var player;

function preload(){
  hexagonImg = loadImage("hexagon.png");

}

function setup() {
  createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

  stand = new Ground(600,285,200,10);

  block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);
  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);
  bolck10 = new Box(600,170,30,40);
  block11 = new Box(570,180,30,40);
  block12 = new Box(630,180,30,40);
  block13 = new Box(600,140,30,40);
  block14 = new Box(900,170,30,40);
  block15 = new Box(930,170,30,40);
  block16 = new Box(870,170,30,40);
  block17 = new Box(840,170,30,40);
  block18 = new Box(960,170,30,40);
  block19 = new Box(900,140,30,40);
  block20 = new Box(930,140,30,40);
  block21 = new Box(870,140,30,40);
  block22 = new Box(900,110,30,40);

  

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new SlingShot(this.polygon,{x:150, y:160});

}

function draw() {
  background("gray");
  Engine.update(engine);


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  bolck10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill(rgb(47, 48, 48));

  stand.display();

  polygon.display();

  sling.display();

  ImageMode(CENTER)
  Image(hexagonImg, polygon.positionx,polygon.positiony,40,49);

}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
    chain.attach(this.polygon);
		Matter.Body.setPosition(this.polygon,{x:235, y:420})
		
	}
}