/*jshint esversion: 6 */

function setup() {
    angleMode(DEGREES);
}

function draw() {
    background(5);
    angleMode(DEGREES);

    let currentHour = hour();
    let currentMinute = minute();
    let currentSecond = second();
    let endSecond = map(60-currentSecond, 0, 60, 0, 360);
    let endMinute = map(60-currentMinute, 0, 60, 0, 360);
    let endHour = map(24-currentHour, 0, 12, 0, 360);

    w = cos(360/60) * 395;
    h = sin(360/60) * 395;

    //HOUR GRAPHIC
    push();
    translate(width*0.5, height*0.5);
    strokeWeight(8);
    
    stroke(72, 72, 96);
    polygon(0, 0, 200, 12);
    pop();

    //HOUR EFFECT
    push();
    translate(width*0.5, height*0.5);
    scale(1,-1,1);
    strokeCap(SQUARE);
    strokeWeight(20);
    noFill();
    stroke(5);
    rotate(90);
    arc(0, 0, w, w, 0, endHour);
    pop();

    //MINUTE GRAPHIC
    push();
    translate(width*0.5, height*0.5);
    strokeWeight(8);
    stroke(120, 120, 120);
    polygon(0, 0, 225, 60);
    pop();

    //MINUTE EFFECT
    push();
    translate(width*0.5, height*0.5);
    scale(1,-1,1);
    strokeCap(SQUARE);
    strokeWeight(12);
    noFill();
    stroke(5);
    rotate(90);
    arc(0, 0, 450, 450, 0, endMinute);
    pop();

    //SECONDS GRAPHIC
    push();
    translate(width*0.5, height*0.5);
    strokeWeight(4);
    stroke(144, 96, 120);
    polygon(0, 0, 250, 60);
    pop();

    //SECONDS EFFECT
    //MINUTE EFFECT
    push();
    translate(width*0.5, height*0.5);
    scale(1,-1,1);
    strokeCap(SQUARE);
    strokeWeight(10);
    noFill();
    stroke(5);
    rotate(90);
    arc(0, 0, 500, 500, 0,endSecond);
    pop();

    push();
    translate(50,50);
    fill(255);
    noStroke();
    text(currentHour + ': ' + currentMinute + ': ' + currentSecond, 5, 50);
    pop();
}

function polygon(x, y, radius, npoints) {
    let angle = 360 / npoints;

    noFill();
    strokeJoin(BEVEL);
    beginShape();
    for (var a = 0; a < 360; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
  }