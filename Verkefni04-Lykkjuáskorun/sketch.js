
function setup(){
      createCanvas(400,400);
      background(255,215,0);
      strokeWeight(2);
      colorMode(HSB);
      frameRate(2);
    }

function draw(){
      for(var x = 0; x < width; x = x+20){
        fill(random(0,360),75,100);
        for(var y = 0; y < height; y = y+20){
          ellipse(10 + x, 10 + y, 15, 15);
        }
      }
    }
