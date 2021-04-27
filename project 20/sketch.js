var gardenImg, catSitImg, catWalkImg, catWalk2Img, cat4Img;
var mouseTeasingImg, mouseTeasing2Img, mouseStandingImg, mouseImg4;
var tom, jerry;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catSitImg=loadImage("images/cat1.png");
    catWalkingImg=loadImage("images/cat2.png");
    catWalk2Img=loadImage("images/cat3.png");
    cat4Img=loadImage("image/cat4.png");
    mouseTeasingImg=loadImage("images/mouse1.png");
    mouseTeasing2Img=loadImage("images/mouse4.png");
    mouseStandingImg=loadImage("images/mouse2.png");
    mouseImg4=loadImage("images/mouse3.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite()
}

function draw() {

    background(255);
    background("gardenImg")
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
