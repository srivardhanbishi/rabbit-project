var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var banana,bananaImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("orangeLeaf.png");
  bananaImg=loadImage("apple.png");
  
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple=createSprite(120,80,10,10)
banana=createSprite(320,80,10,10)
apple.addImage(appleImg)
 apple.scale=0.1 
 banana.addImage(bananaImg)
 banana.scale=0.1;

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  apple.velocityY=4;
  banana.velocityY=4;
 createApples()
 createBanana()
  drawSprites();
}
function createApples(){
  apple.lifeTime=100;
}
  function createBanana(){
  banana.lifeTime=100;
  

}



  














































































































































































































