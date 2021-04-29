// Hér kemur kóðinn þinn:
var boltiX = 100;
var boltiY = 100;
var hradiX = 4;
var hradiY = -5;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiX;
var spadiY;

function setup() {
	createCanvas(600,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  spadiX = mouseX;
  background(255,200,0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir veggina:
  if ((boltiX > width-boltiStaerd/2) || boltiX < boltiStaerd/2)  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið:
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
  // Athugar hvort boltinn snertir gólfið:
  if(boltiY > height-boltiStaerd/2) {
    hradiY = hradiY *-1;
    if(stig > 0) {
      stig = stig - 1;
    }
  }
  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(spadiX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = -abs(hradiY * -1);
    stig = stig + 1;
  }
  // Athuga hvort spaði snertir vegginn vinstra megin:
  if(mouseX - spadiBreidd/2 < 0) {
    spadiX = spadiBreidd/2
  }
  // Athuga hvort spaði snertir vegginn hægra megin:
  if(mouseX + spadiBreidd/2 >= width) {
    spadiX = width-spadiBreidd/2
  }
	// Teikna boltann
  fill(236,36,94);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(3,123,227);
  rect(spadiX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(spadiX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);
}
