var Rocky,Adheera;
var ground,obstacle;
var Rockyimg,Adheeraimg;
var backgroundImg,Obstacleimg;
var backG;
var gameState = 1;

function preload()
{
  backgroundImg = loadImage("Images/resizeBG.jpg");
  Rockyimg = loadAnimation("Images/Yash.png","Images/Yash2removebg.png","Images/Yash3removebg.png","Images/Yash4removebg.png","Images/Yash5removebg.png","Images/Yash6removebg.png","Images/Yash7removebg.png","Images/Yash8removebg.png");
  Adheeraimg = loadAnimation("Images/Sanjay1removebg.png","Images/Sanjay2removebg.png","Images/Sanjay3removebg.png","Images/Sanjay4removebg.png","Images/Sanjay5removebg.png","Images/Sanjay6removebg.png");
  Obstacleimg = loadImage("Images/obstacleremovebg.png");  
}
function setup() 
{
  
  createCanvas(displayWidth-5,displayHeight-145);

  backG = createSprite(width/2,height/2,displayWidth-5,displayHeight-145);
  backG.addImage("backgroundImage",backgroundImg);
	backG.velocityX = -4;
	backG.scale = 2.9;
//	backG.visible = false;
  /*
  backG = createSprite(displayWidth/2,displayHeight/2,displayWidth-5,displayHeight-200);
  backG.addImage(backgroundImg);
  backG.velocityX = -10;
*/
  Rocky = createSprite(400, 630, 50, 50);
  Rocky.addAnimation('Rockyimg',Rockyimg);
  Rocky.scale = 0.45;

  Adheera = createSprite(700,620,50,50);
  Adheera.addAnimation('Adheeraimg',Adheeraimg);
  Adheera.scale = 0.45;

  ground = createSprite(750,730,1500,30);
  ground.x = ground.width/2;
  ground.visible = false;
}

function draw() 
{
  background(0);
  //image(backgroundImg,displayWidth/2,displayHeight/2,displayWidth*4,displayHeight*4);

 if(gameState === 1){
   Adheera.velocityX = +5;
   Adheera.debug = true;

   if(backG.x < 600 ){
     backG.x = displayWidth/2;
   }
   
   if(Rocky.x > displayWidth){
    backG.x = Rocky.x + displayWidth/2;
  }

   spawnObstacle();

   //camera.position.x = Rocky.x;

   if(keyIsDown(RIGHT_ARROW) ){
    Rocky.x = Rocky.x + 5;
   }

   if(keyWentDown("space")){
      Rocky.velocityY = -10;
   }

   Rocky.velocityY = Rocky.velocityY + 0.5;

   Rocky.collide(ground);

 }


  drawSprites();
}


function spawnObstacle(){
if(frameCount % 60 === 0){
  var randX = random(100,displayWidth - 200);
  obstacle = createSprite(randX,-10,25,25);
  obstacle.addImage(Obstacleimg);
  obstacle.velocityY = +5;
  obstacle.scale = 0.30;
  obstacle.lifetime = displayHeight/5;
}



}
//variables - CHECK :)
  
//preload function to load the images - download and remove bg (We can look at  it tomorrow also);
//Search the web

//I am not able to find sanjay dutt running image.:(

// setup - create sprites - hero, obstacles, villain, grounds, think of scoring

// draw function