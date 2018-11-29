//some kind of experiment based on 1960s artist frida nakey

function setup() {
createCanvas(windowWidth, windowHeight);

 noLoop();
  fridaNakay();
}

function fridaNakay() {

  //7 random values:
  //size, location(X+Y), orientation, quantity, pen style
  background(255);
  var numthings = random(6, 20);

  for (var j = 0; j < numthings; j++) {

    var length = random(40, 60);
    var Y = random(100, height);
    var X = random(0, width);
    var thick = random(2, 10);
    var grey = random(0, 255);
    var alph = random(0, 255);
    var weight = random(1, 3);
    var weight2 = random(1, 3);
    var numStripesX = random(6, 300);
    var numStripesY = random(6, 300);


    for (var i = 0; i < numStripesX; i++) {
      strokeWeight(weight);
      stroke(grey, alph);
      line(X, Y, X, Y + length);
      X += thick;
    }
    for (var k = 0; k < numStripesY; k++) {
      strokeWeight(weight2);
      stroke(grey, alph);
      line(X, Y, X + length, Y);
      Y += thick;
    }
  }

}
