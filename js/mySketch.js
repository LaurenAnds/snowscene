//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let xCentre, yCentre;
let x;
let y;
let directionX = 0;
let directionY = 1;
let chosenColour;

function setup() {
  createCanvas(800, 600);
  background("skyblue");
  noLoop();
}

function draw() {
  land();
  drawSnowman(random(100, 300), 180);
  drawSnowman(random(300, 500), 200);
  drawSnowman(random(500, 700), 180);
  snowFall();
  //	sunInSky();
  holidayText();
}

function holidayText() {
  textSize(50);
  strokeWeight(4);
  fill("red");
  textAlign(CENTER, BOTTOM);
  text("Merry Christmas", width / 2, 500);
}

function mousePressed() {
  background("darkblue");
  fill("skyblue");
  circle(50, 50, 100);

  redraw();
}
