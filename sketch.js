var hr,min,sec
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  
  hr = hour();
  min = minute();
  sec = second();

  
  translate(200,200);
  rotate(-90);

  strokeWeight(6);
  stroke("red");
  noFill();
  secAngle = map(sec,0,59,0,360);
  arc(0,0,300,300,0,secAngle);

  push();
  rotate(secAngle);
  line(0,0,90,0)
  pop();

  strokeWeight(6);
  stroke("green");
  noFill(); 
  minAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  push();
  rotate(minAngle);;
  line(0,0,50,0)
  pop();

  strokeWeight(6);
  stroke("blue");
  noFill();
  hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  line(0,0,50,0)
  pop();

  drawSprites();

}