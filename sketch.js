var background1,bow,blueballoon,pinkballoon,redballoon,greenballoon,arrow;
var backgroundimg,bowimg,blueballoonimg,pinkballoonimg,redballoonimg,greenballoonimg,arrowimg;

var balloongroup,arrowgroup;

var score;


function preload(){
  
     //load your images here 
     backgroundimg=loadImage("background0.png");
     bowimg=loadImage("bow0.png");
     blueballoonimg=loadImage("blue_balloon0.png")
     pinkballoonimg=loadImage("pink_balloon0.png");
     redballoonimg=loadImage("red_balloon0.png");
     greenballoonimg=loadImage("green_balloon0.png");
     arrowimg=loadImage("arrow0.png");
  
}

function setup() {
  
      createCanvas(450, 400);

      //add code here
      bow=createSprite(390,80);
      bow.addImage(bowimg);

      background1= createSprite(350,80);
      background1.addImage(backgroundimg);
      background1.scale=2;
      background1.velocityX=-4;
  
      balloongroup=createGroup();
  
      arrowgroup=createGroup();
  
      score=0;       
  
}



function draw() {
  
      background("white");

      //add code here
      bow.y=mouseY;
      
    
          

      background1.depth=1;
      bow.depth=3;
  
          if(keyWentUp("space")){
            
                 createArrow();
          }
       
          if(background1.x<80){
            
                 background1.x=background1.width/2;
            
            
          }
          
          if (balloongroup.isTouching(arrowgroup)){
            
            score++;
              
            arrowgroup.destroyEach();
            balloongroup.destroyEach();
            
              }
            
  
         text("score:",400,30);
         text(score,430,30);
             
          
      spawnballoons();
      drawSprites();
     
}

function spawnballoons(){
  
      var randomNo=Math.round(random(1,4));
      switch (randomNo){
        case 1: if(frameCount%80===0){

                    blueballoon=createSprite(0,0);
                    blueballoon.velocityX=2;
                    blueballoon.addImage(blueballoonimg);
                    blueballoon.scale=0.1;
                    blueballoon.y=random(60,380);
                    blueballoon.lifetime = 250;
                              balloongroup.add(blueballoon);


             } 
       break;
       case 2: if(frameCount%80===0){

                    greenballoon=createSprite(0,0);
                    greenballoon.velocityX=2;
                    greenballoon.addImage(greenballoonimg);
                    greenballoon.scale=0.1;
                    greenballoon.y=random(70,360);
                    greenballoon.lifetime = 250;
                    balloongroup.add(greenballoon);
             }
          break;

        case 3:  if (frameCount%80===0){

                    pinkballoon=createSprite(0,0);
                    pinkballoon.scale=1.2;
                    pinkballoon.velocityX=2;
                    pinkballoon.y=random(20,250);
                    pinkballoon.addImage(pinkballoonimg);
                    pinkballoon.lifetime = 250;
                              balloongroup.add(pinkballoon);

              }
          break;

          case 4: if (frameCount%80===0){

                    redballoon=createSprite(0,0);
                    redballoon.scale=0.1;
                    redballoon.velocityX=2;
                    redballoon.y=random(20,250);
                    redballoon.addImage(redballoonimg);
                    redballoon.lifetime = 250;
                    balloongroup.add(redballoon);

              }
          break;
      
  }



}


             

function createArrow(){
  
              arrow=createSprite(400,10);
              arrow.addImage(arrowimg);
              arrow.scale=0.2;
              arrow.velocityX=-13;
              arrow.y=bow.y;
              arrow.lifetime = 35;
   arrowgroup.add(arrow);
  
}

//clean
