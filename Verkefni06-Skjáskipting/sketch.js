function setup(){
      createCanvas(700,520);
      noStroke();
    }

function draw(){
      background(51);
      if(mouseX < width/2 && mouseY < height/2){
        fill(255,200,0);
        rect(0,0,width/2,height/2);

        if(mouseIsPressed) {
          fill(255,200,0);
          rect(0,0,width,height);
        }
      }
      else if (mouseX > width/2 && mouseY < height/2) {
        fill(255,0,40);
        rect(width/2,0,width/2,height/2);

        if(mouseIsPressed) {
          fill(255,0,40);
          rect(0,0,width,height);
        }
      }
      else if (mouseX < width/2 && mouseY > height/2) {
        fill(0,255,0);
        rect(0,height/2,width/2,height/2);

        if(mouseIsPressed) {
          fill(0,255,0);
          rect(0,0,width,height);
        }
      }
      else if(mouseX >width/2 && mouseY >height/2) {
        fill(0,0,255);
        rect(width/2,height/2,width/2,height/2);

        if(mouseIsPressed) {
          fill(0,0,255);
          rect(0,0,width,height);
        }
      }
    }

function keyPressed() {
  if(keyCode == 32) {
    fill(255,200,0);
    rect(0,0,width/2,height/2);
    fill(255,0,40);
    rect(width/2,0,width/2,height/2);
    fill(0,255,0);
    rect(0,height/2,width/2,height/2);
    fill(0,0,255);
    rect(width/2,height/2,width/2,height/2);
  }
}
