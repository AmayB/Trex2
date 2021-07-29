var trex,trex_Running;
var ground, groundImage, invisibleGround;
var edges;

function preload() {
    trex_Running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png");
}

function setup() {
    createCanvas(400,400);

    trex = createSprite(100,180,100,100);
    trex.scale = 0.5;
    trex.addAnimation("Running",trex_Running);

    ground = createSprite(200,180,400,400);
    ground.addImage(groundImage);
    ground.x = ground.width/2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
    
}

function draw() {
    background("white");

    if(keyDown("space")&&(trex.y > 100)) {
        trex.velocityY = -10;
    }



    trex.velocityY = trex.velocityY + 0.8;

    if(ground.x<0) {
        ground.x = ground.width/2;
    }

    trex.collide(invisibleGround);
    drawSprites();
}