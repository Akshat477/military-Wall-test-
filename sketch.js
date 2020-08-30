var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
 speed = random(223,321)
 weight = random(30,52)
 thickness = random(22,83)

 bullet = createSprite(50,200,50,10)
 bullet.shapeColor = color("white")
 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor = color("brown")
}

function draw() {
  background(255,255,255); 

  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width+bullet.width)/2){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/wall*wall*wall;
    if(damage>10){
      wall.shapeColor = color("red")
    }
    if(damage<10){
      wall.shapeColor = color("yellow")
    }
  }

  drawSprites();
}