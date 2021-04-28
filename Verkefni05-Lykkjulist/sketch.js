
function setup() {
  createCanvas(400,400);
  background(255,215,0);
  strokeWeight(2);
  colorMode(HSB);
  frameRate(2);
}

function draw() {
  for(var i = 0; i < 13; i = i+1){
    fill(random(0,360),75,100);
    ellipse(70 + i*20, 180, 15, 15);
  }
}
