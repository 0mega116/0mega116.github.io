function setup() {
      createCanvas(400, 400);
      noStroke();
      colorMode(HSB);
      frameRate(1);
    }

    function draw() {
      background(0,0,100);

      //teiknaStjörnu
      beginShape();
      fill(random(0,359),100,50);
      ellipse(0,0,400,400);
      ellipse(400,0,400,400);
      ellipse(0,400,400,400);
      ellipse(400,400,400,400);
      endShape();
    }
