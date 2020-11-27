const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var boy, tree
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    boy= loadImage ("sprites/boy.png")
    tree= loadImage ("sprites/tree.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    stone=new Stone (235,530,30)
    m1=new Mango (1010, 95,25);
    m7=new Mango (1100, 195,25);
    m2=new Mango (900, 200,25);
    m4=new Mango (855, 405,25);
    m5=new Mango (1150, 255,25);
    m3=new Mango (950, 305,25);
    m6=new Mango (800, 305,25);
    ground = new Ground(600,height,1200,20)

    slingshot= new  Slingshot (stone.body, {x:235,y:530});

}

function draw(){
    background(0);
    imageMode(CENTER)
    image(boy,300,600,200,300);
    image (tree, 950, 400, 500, 700);
    Engine.update(engine);
    console.log(m1.r);
    slingshot.display();
    stone.display();
    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();

    colide(stone,m1)
    colide(stone,m2)
    colide(stone,m3)
    colide(stone,m4)
    colide(stone,m5)
    colide(stone,m6)
    colide(stone,m7)
}
function colide(lstone,lmango){
	mamgoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mamgoBodyPosition.x,mamgoBodyPosition.y);
	
	if (distance<=lmango.r+lstone.r)
	
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode==32){
        slingshot.attach(stone.body)
    }
}
