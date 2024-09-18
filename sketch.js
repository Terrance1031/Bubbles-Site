let img;
let bubblesGif;
let showBubbles = false;

let headerOne, titleOne, blowButton; 

function preload() {
  img = loadImage('assets/grass.jpg');
  bubblesGif = loadImage('assets/bubbles.gif');
} 

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight); // Create a canvas of 800x600 pixels
  
  headerOne = select("#headerOne");
  titleOne = select("#title");
  blowButton = select("#blow");


  let button = select('#blow');
  button.mousePressed(showBubblesGif);
}

function draw() {
  background(255); // Set the background to white
  noStroke();

  // Set shadow properties
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
  fill(127, 220, 0); // Background
  rect(0, 0, width, height);

  if(!showBubbles){
    bubbleWand();
    //here is where h1 h2 dissappear
    headerOne.style('display', 'block');
    titleOne.style('display', 'block');
    blowButton.style('display', 'block');
  } else {
    headerOne.style('display', 'none');
    titleOne.style('display', 'none');
    blowButton.style('display', 'none');
  }

  // image(img, 0, 0, innerWidth, innerHeight);
if (showBubbles) {
  image(bubblesGif, 0, 0, innerWidth, innerHeight);
}


}

function showBubblesGif() {
  showBubbles = true;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function bubbleWand(){

  push();
  translate(-20, 300);
  rotate(PI / -4);
  fill(0, 0, 255);
  rect(0, -30, 190, 30); // Handle of the wand
  
  // Draw the bubble wand ellipses within the same push/pop block
  fill(0, 0, 255);
  ellipse(224, -17, 100, 100); // Outer bubble wand
  
  fill(127, 220, 0);
  ellipse(220, -10, 70, 70); // Inner bubble wand
  pop();
  
  // Reset shadow properties to avoid affecting other drawings
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  
  push();
  translate(-20, 300);
  rotate(PI / -4);
  fill(0, 0, 255);
  rect(0, -30, 190, 30); // Handle of the wand
  pop();

  push();
  translate(-20, 300);
  rotate(PI / -4);
  fill(0, 0, 255);
  rect(0, -30, 190, 30); // Handle of the wand
  pop();


  fill(0, 0, 255);
  ellipse(130, 130, 100, 100); // Outer bubble wand

  fill(127, 220, 0);
  ellipse(130, 130, 70, 70); // Inner bubble wand

  // Reset shadow properties to avoid affecting other drawings
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';


}