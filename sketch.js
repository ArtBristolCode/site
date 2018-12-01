//based on code fot drawgramming https://www.beccarose.co.uk/code/drawgramming/ (this is a simplified version)

var img = [];
var imgW;
var imgH;

function preload() {
  // load images
  for (var i = 0; i < 35; i++) {
    img[i] = loadImage(i + ".png");
    print(i);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  imageMode(CENTER);
  noStroke();
  imageSnap();
}

/////////////////////////////
//function to make imaages //
/////////////////////////////

function imageSnap() {
  background(255);
  //image randoms
  var rand1 = ~~random(35);
  var rand2 = ~~random(35);
  var rand3 = ~~random(35);

  //display images
  tint(255, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand3], (width / 2) - 200, (height / 2), imgW, imgH);
  tint(255, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand2], width / 2, (height / 2) - 10, imgW, imgH);
  tint(255, ~~random(100, 200)); // Apply transparency without changing color
  image(img[rand1], (width / 2) + 200, (height / 2) + 30, imgW, imgH);

}
