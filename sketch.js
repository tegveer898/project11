var runner,ground;
var runnerImage,groundImage;
var b1,b2;
function preload(){
  groundImage=loadImage("path.png");
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(1400,600);
  
ground= createSprite(700,200);
ground.addImage("ground",groundImage);
ground.scale = 1.2;
ground.y= ground.height/2;

runner = createSprite(700,500)
  runner.addAnimation("runner",runnerImage);
  runner.scale = 0.1 ;

  b1 = createSprite(40,600,1000,1200);
  b1.visible = false;
  b2 = createSprite(1400,600,1050,1200);
  b2.visible = false;
  //create sprites here
}

function draw() {
  background("lightblue")
 ground.velocityY =  5;
 if(ground.y>600){
  ground.y=ground.height/2;
 }
runner.x = mouseX;

runner.collide(b1);
runner.collide(b2);

drawSprites()
}
