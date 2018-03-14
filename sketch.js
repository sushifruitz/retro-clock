/*jshint esversion: 6 */

function setup() {
    createCanvas(1000,1000);
}

function draw() {
    background(5);

    let currentHour = hour();
    let currentMinute = minute();
    let currentSecond = second();

    translate(0, 0, 1);

    push();
    translate(width*0.5, height*0.5);
    strokeWeight(10);
    stroke(72, 72, 96);
    polygon(0, 0, 200, 12);
    pop();

    push();
    translate(width*0.5, height*0.5);
    strokeWeight(7);
    stroke(120, 120, 120);
    polygon(0, 0, 225, 24);
    pop();

    push();
    translate(width*0.5, height*0.5);
    strokeWeight(4);
    stroke(144, 96, 120);
    polygon(0, 0, 250, 60);
    pop();


    /* fill(255);
    noStroke();
    text(currentHour + ': ' + currentMinute + ': ' + currentSecond, 5, 50); */
    
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    noFill();
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }