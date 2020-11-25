const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,object;
function setup() {
  createCanvas(800,400);
myengine = Engine.create();
myworld = myengine.world;

var balloptions = {
  restitution:0.8
}
object = Bodies.circle(250,250,50,balloptions);
World.add(myworld,object);
var options= {
  isStatic:true
}
ground = Bodies.rectangle(400,390,800,10,options)
World.add(myworld,ground);
}

function draw() {
  background(0);  
 Engine.update(myengine)
  rectMode(CENTER)
 ellipse(object.position.x,object.position.y,100,100)
  rect (ground.position.x,ground.position.y,800,10)
}