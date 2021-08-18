var sea,sea_image,ship,ship_image,edges

function preload(){
sea_image=loadImage("sea.png")
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  background("blue")
sea=createSprite(0,200,30,10);
sea.addImage(sea_image)
sea.velocityX=-5
sea.scale=.25


ship=createSprite(200,250,40,50);
ship.addAnimation("moving",ship_image);

edges=createEdgeSprites()

ship.scale=.2
ship.x=100
}

function draw() {
  background(0);
 sea.velocityX=-5

 //console.log(ship.y)
 console.log(ship.x)

 if(sea.x<0){
sea.x=sea.width/8
}

if(keyDown("UP_ARROW")){
  ship.velocityX=0
  ship.velocityY=-3
}
if(keyDown("DOWN_ARROW")){
  ship.velocityX=0
  ship.velocityY=3
}

ship.collide(edges[2])
ship.collide(edges[3])


drawSprites();
}