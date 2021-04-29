
function setup() {
  createCanvas(400,400);
  background(255,215,0);
  strokeWeight(2);
  colorMode(HSB);
  frameRate(2);
  rectMode(CENTER);
}

function draw() {
  //Teiknar efri línu af hringjum
  for(var i = 0; i < 13; i = i+1){
    fill(random(0,360),75,100);
    ellipse(50 + i*25, 150, 20, 20);
  }
  //Teiknar línu af ferningum
  fill(random(0,360),75,100);
  for(var r = 0; r < 9; r = r+1){
    rect(100 + r*25, 200, 20, 20);
  }
  //Teiknar neðri línu af hringjum
  for(var e = 0; e < 11; e = e+1){
    fill(random(0,360),75,100);
    ellipse(75 + e*25, 250, 20, 20);
  }
}
