var tom, jerry, tomI1, tomI2, tomI3, jerryI1, jerryI2, jerryI3;
var fundo, fundoI;
function preload() {
    //load the images here
    fundoI = loadImage("images/garden.png");
    tomI1 = loadImage("images/cat1.png");
    tomI2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomI3 = loadImage("images/cat4.png");
    jerryI1 = loadImage("images/mouse1.png");
    jerryI2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryI3 = loadImage("images/mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here

    jerry = createSprite(200, 650, 10, 10);
    jerry.addImage(jerryI1);
    jerry.scale = 0.2;
    //jerry.debug = true;
    jerry.setCollider("circle", 0, 0, 120);

    tom = createSprite(850, 660, 10, 10);
    tom.addImage(tomI1);
    tom.scale = 0.2;
    tom.setCollider("circle", 0, 0, 120);
}

function draw() {
    background(fundoI);
    text("APERTE A SETA PARA A ESQUERDA PARA IRRITAR O GATO", 300, 300);

    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    /*if(tom.isTouching(jerry)){
      tom.addImage(tomI3);
      
     }*/
    if (tom.x - jerry.x < (tom.width - jerry.width) / 2) {
        tom.addAnimation("gatoSentado", tomI3)
        tom.changeAnimation("gatoSentado");
        tom.velocityX = 0;
        tom.x = 330;
        tom.scale = 0.2;
        jerry.addAnimation("jerryParado", jerryI3);
        jerry.changeAnimation("jerryParado");
        jerry.scale = 0.2;
    }

    drawSprites();
}

function keyPressed() {

    //For moving and changing animation write code here
    if (keyDown("left_arrow")) {
        jerry.addAnimation("ratoProvocando", jerryI2);
        jerry.changeAnimation("ratoProvocando");
        jerry.frameDelay = 25;

        tom.addAnimation("gatoAndando", tomI2);
        tom.changeAnimation("gatoAndando");
        tom.velocityX = -4;
        text.visible = false;
    }
}
