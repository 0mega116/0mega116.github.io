var bukur = 100;
var hals = 35;
var faetur = 30;

function setup() {
      createCanvas(800,800);
      rectMode(CENTER);
      strokeWeight(2);
    }

function draw() {
  // Hér verður til hundurinn Snati, sem er að ganga í gegnum mikið breytingarsteið í vexti sínum.
      background(255,200,0);
      fill(158,71,17);
      stroke(158,71,17);
      // Teiknar hausinn og háls:
      rect(mouseX + bukur/2 - 15, mouseY - hals/2 ,30, hals);
      rect(mouseX + bukur/2, mouseY - hals, 60, 30);
      // Teiknar búkin:
      rect(mouseX, mouseY, bukur, 40);
      // Teiknar eyrun:
      rect(mouseX + bukur/2 - 27, mouseY - hals - 22, 6, 10);
      rect(mouseX + bukur/2 - 8, mouseY - hals - 22, 6, 10);
      // Teiknar augun(hvítu):
      fill(255);
      ellipse(mouseX + bukur/2 - 18, mouseY - hals - 5, 10, 10);
      ellipse(mouseX + bukur/2 - 4, mouseY - hals - 5, 10, 10);
      // Teiknar augasteina:
      stroke(0);
      fill(0);
      ellipse(mouseX + bukur/2 - 18, mouseY - hals - 5, 3, 3);
      ellipse(mouseX + bukur/2 - 4, mouseY - hals - 5, 3, 3);
      // Teiknar fæturna:
      line(mouseX - bukur/2, mouseY + 20, mouseX - bukur/2, mouseY + 20 + faetur);
      line(mouseX + bukur/2, mouseY + 20, mouseX + bukur/2, mouseY + 20 + faetur);
      line(mouseX - bukur/2 + 15, mouseY + 20, mouseX - bukur/2 + 15, mouseY + 20 + faetur);
      line(mouseX + bukur/2 - 15, mouseY + 20, mouseX + bukur/2 - 15, mouseY + 20 + faetur);
      // Teiknar skott:
      line(mouseX - bukur/2, mouseY - 20, mouseX - bukur/2 - 30, mouseY - 20);
    }

function mousePressed() {
      bukur = random(50,150);
      hals = random(35,100);
      faetur = random(15,70);
    }
