var form;

function setup() {
      createCanvas(400, 400);
      noStroke();
      colorMode(HSB);
      frameRate(2);
      rectMode(CENTER);
    }

    function draw() {
      background(0,0,100);
      fill(random(0,359),100,50);
      form = int(random(0,2));
        if(form == 0){
          rect(random(0,400),random(0,400),random(40,80),random(40,80));
        }
        else {
          ellipse(random(0,400),random(0,400),random(30,100));
        }
    }
