const GRID = 15;
const CELL = 1080 / GRID;

function setup() {
 createCanvas(1080, 1080);
 noStroke();
 frameRate(6);
}

function draw() {
 background(255, 255, 220);
 const cz = random(80, CELL);
 const sz = random(40, CELL);

 for (let gy = 0; gy < GRID; gy++) {

   for (let gx = 0; gx < GRID; gx++) {
     const cx = gx * CELL + CELL / 2;
     const cy = gy * CELL + CELL / 2;

     push();
     blendMode(MULTIPLY);
     fill('orange');
     circle(cx, cy, cz);
     pop();

     push();
     blendMode(MULTIPLY);
     fill('#3b8fc4ff');
     circle(cx/2, cy/2, cz/2);
     pop();


     push();
     blendMode(MULTIPLY);
     fill('#38c72bff');
     circle(cx/4, cy/4, cz/2);
     pop();

     push();
     blendMode(MULTIPLY);
     fill('#5a2bc7ff');
     circle(cx/8, cy/8, cz/8);
     pop();


     push();
     blendMode(MULTIPLY);
     translate(cx, cy);
     fill('pink');
     rectMode(CENTER);
     rect(0, 0, sz, sz);
     pop();


   }
 }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}