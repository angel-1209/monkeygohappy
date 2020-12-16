
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground , invisibleGround
var banana , bananagroup 
var obs, obsi , obsgroup
    function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obsi = loadImage("obstacle.png");
      
 
  
}



function setup() {
   createCanvas(400,400)
  monkey= createSprite(80,315,20,20)
  monkey.addAnimation( "monkey", monkey_running);
  monkey.scale= 0.15


  
  invisibleGround = createSprite(300,370,900,30);
  //invisibleGround.visible = false;
  invisibleGround.debug = true;
  bananaGroup=new Group()
  obsgroup= new Group()
}


function draw() {
  background("white")
  score= Math.round( frameRate() + score ) ;
  text ("score:"+ score,300,20)
  
  if (keyDown("space")){
   monkey.velocityY= -1
   
 }
 
  monkey.velocityY= monkey.velocityY+0.6
 
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -5;
        
    }
    obs();
 banana() 
 monkey.collide(invisibleGround);
 drawSprites();
}

function banana(){
 if (frameCount % 80=== 0) {
   var banana = createSprite(600,120,40,10);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
    banana.scale = 0.1 ;
    banana.velocityX = -3;

     
  banana.lifetime = 200;
    bananaGroup.add(banana);

 }

}

function obs(){
 if (frameCount % 300=== 0) {
   var obs = createSprite(600,350,40,10);
   
   obs.addImage(obsi);
    obs.scale = 0.1 ;
    obs.velocityX = -3;

     
  obs.lifetime = 200;
    obsgroup.add(obs);

 }

}


