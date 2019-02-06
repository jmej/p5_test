// video source: https://vimeo.com/90312869
let img;
let theta = 0;

function setup() {
  createCanvas(710, 400, WEBGL);

  img = loadImage('assets/cat.jpg');
}

function draw() {
  background(250);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(100, 100, 100);
  pop();
  theta += 0.05;
}
