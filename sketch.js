const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var zombie1,zombie1Img,zombie2,zombie2Img;
var bg;
var human1,human1Img,human2,human2Img;

function preload(){
zombie1Img = loadImage("images/zombie.png");
bg = loadImage("images/scarybackground.jpg");
zombie2Img = loadImage("images/zombie2.jpg");
human1Img = loadImage("images/ncp1.jpg");
human2Img = loadImage("images/ncp2.jpg");

}

function setup(){
createCanvas(1000,800);
zombie1 = createSprite(100,700,10,10);
zombie1.addImage(zombie1Img);
zombie1.scale = 0.1;


}

function draw(){
background(bg);

drawSprites()
}