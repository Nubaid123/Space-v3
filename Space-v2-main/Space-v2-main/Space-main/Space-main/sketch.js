var spaceShip, spaceShipImg;
var ufo, ufoImg;
var bg, bgImg;
var obs, obsImg;
var obstacles;
var health = 3;

function preload(){
    bgImg = loadImage("space.jpg")
    
    spaceShipImg = loadImage("pngwing.com (1).png")
    
    ufoImg = loadImage("Daco_233939.png")
    obsImg = loadImage("meteorite.png")
    }
    
    function setup(){

        createCanvas(windowWidth - 200,windowHeight - 200);
      //background image
      bg = createSprite(200,200,width,height);
      bg.addImage(bgImg);
      bg.scale = 1.3;

    spaceShip = createSprite(100,200,20,50);
    spaceShip.addImage(spaceShipImg);
    spaceShip.scale = 0.2;

    obstacles= new Group();
    
    }
    function spawnMeteorites() 
    {
          if(World.frameCount % 60 === 0) {
            obs = createSprite(450,Math.round(random(10,100)),40,50);
        obs.addImage(obsImg);
        obstacles.add(obs);
        
        
        obs.scale = 0.1;
        obs.velocityX = -4;
    
        

    
       obs.lifetime = 100;
        
       spaceShip.depth = spaceShip.depth + 1;
       
          }
    }
    function spawnUfo() 
    {
          if(World.frameCount % 80 === 0) {
            ufo = createSprite(500,Math.round(random(200,400)),40,50);
        ufo.addImage(ufoImg);
        obstacles.add(ufo);
        
        ufo.scale = 0.1;
        ufo.velocityX = -4;
    
        

    
       ufo.lifetime = 100;
        
       spaceShip.depth = spaceShip.depth + 1;
       
          }
    }






function draw() {
    if(keyDown(UP_ARROW)){
        spaceShip.y = spaceShip.y-3;
    }
    if(keyDown(DOWN_ARROW)){
        spaceShip.y = spaceShip.y+3;
    }
    if(keyDown(RIGHT_ARROW)){
        spaceShip.x = spaceShip.x+3;
    }
    if(keyDown(LEFT_ARROW)){
        spaceShip.x = spaceShip.x-3;
    }
    if(obstacles.isTouching(spaceShip)){
        for(var i=0;i<obstacles.length;i=i+1){
            if(obstacles[i].isTouching(spaceShip)){
                obstacles[i].destroy();
                health = health-1;
            }
        }
    }
  
   
    spawnMeteorites();
    spawnUfo();

    drawSprites();
    if(health<=0){
        fill("white");
        textSize(100);
        text("Game Over", 100, 100);
        spaceShip.destroy();
    }
}