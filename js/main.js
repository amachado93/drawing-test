var value = [255, 224, 250];

function setup(){
  createCanvas(600,400);
}

function draw(){
  if (mouseIsPressed){
    fill(value);
    noStroke();
    ellipse(mouseX, mouseY, 10, 10);
  } else {}
}

function keyTyped(){
  if (key === 'v'){
    value = [255, 148, 0];
  } else if (key === 'b'){
    value = [255, 224, 250];
  } else if (key === 'c'){
    background(255, 255, 255);
  }
}
