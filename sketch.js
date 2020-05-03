const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var tower1, tower2, tower3, tower4, tower5, tower6, tower7; 
var object1, object2, object3, object4, object5, object6, object7;

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
   
   tower1 = new Tower(30,220,30,360);
   tower2 = new Tower(770,220,30,360);
   tower3 = new Tower(70,240,30,320);
   tower4 = new Tower(730,240,30,320);
   tower5 = new Tower(120,260,50,280);
   tower6 = new Tower(680,260,50,280);
   tower7 = new Tower(180,280,50,240);
   tower8 = new Tower(620,280,50,240);
   tower9 = new Tower(260,300,90,200);
   tower10 = new Tower(540,300,90,200);
   tower11 = new Tower(400,280,190,240);

   
   
}

function draw() {
  background("orange"); 
  Engine.update(engine); 

  tower1.display();
  tower2.display();
  tower3.display();
  tower4.display();
  tower5.display();
  tower6.display();
  tower7.display();
  tower8.display();
  tower9.display();
  tower10.display();
  tower11.display();

  fill ("blue");
  triangle(30,20,15,40,45,40);
  triangle(770,20,755,40,785,40);
  ellipse(70,66,30,30);
  ellipse(730,66,30,30);
  triangle(120,100,95,120,145,120);
  triangle(680,100,655,120,705,120);
  ellipse(180,135,50,50);
  ellipse(620,135,50,50);
  triangle(260,160,215,200,305,200);
  triangle(540,160,495,200,585,200);
  triangle(400,100,305,160,495,160);

}