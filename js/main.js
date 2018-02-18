function setup(){
  createCanvas(600,400);
}

function draw(){
  if (mouseIsPressed){
    fill(255, 224, 250);
    noStroke();
    ellipse(mouseX, mouseY, 10, 10);
  } else {}
}
