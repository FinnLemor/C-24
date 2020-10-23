const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pig1,p2;
var engine, world;
var box1,b2,b3,b4,b5;
var log1,l2,l3,l4;
var bi1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    b2 = new Box(920,320,70,70);
    b3 = new Box(700,240,70,70);
    b4 = new Box(920,240,70,70);
    b5 = new Box(810,160,70,70);
    pig1 = new Pig(810,350)
    p2 = new Pig(810,220)
    log1 = new Log(810,260,300,PI/2)
    l2 = new Log(810,180,300,PI/2)
    l3 = new Log(760,120,150,PI/7)
    l4 = new Log(810,120,150,-PI/7)
    bi1 = new Bird(100,100)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(b2.body.position.x);
    console.log(b2.body.position.y);
    console.log(b2.body.angle);
    box1.display();
    bi1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    pig1.display();
    p2.display();
    log1.display();
    l2.display();
    l3.display();
    l4.display();
    ground.display();
}