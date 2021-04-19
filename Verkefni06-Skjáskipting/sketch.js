function setup(){
      createCanvas(700,520);
      background(51);
      noStroke();
    }

function draw(){
      if(mouseX < width/2 && mouseY < height/2){
        rect(0,0,width/2,height/2);
      }
    }
