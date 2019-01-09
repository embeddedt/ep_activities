// Copyright (C) Themba Dube, 2018
// All rights reserved.

var input, button, greeting;

var xLeft = 75;
var yButtons = 460;

var bars = [ 0, 0, 0, 0, 0, 0, 0 ];
var baseline;
var labelGap;
var labelLeft;
var baseMargin = 10;
var theWidth;
var html5Objs = [];
function barUp() {
}
function barDown() {
}
function max(a, b)
{
    return a < b ? b : a;
}
function min(a, b)
{
    return a > b ? b : a;
}
function windowResized() {
    html5Objs.foreach(function(entry) {
        entry.remove();
    });
    theWidth = max(windowWidth, 480);
    theWidth = min(theWidth, 1000);
    labelGap = theWidth / 8;
    labelLeft = theWidth / 7;
    init();
}
function setup() {
    theWidth = max(windowWidth, 480);
    theWidth = min(theWidth, 1000);
    createCanvas(windowWidth, 540);
    init();
}
function init() {

  // create canvas
  resizeCanvas(theWidth, 540);
  labelGap = theWidth / 8;
  labelLeft = theWidth / 7;
  textAlign(CENTER);
  textSize(50);
  
  var title = createInput('Click here to enter a title for the chart');
  title.size(theWidth-(baseMargin*2), 30);
  title.position(baseMargin, baseMargin);
  title.style('background-color', '#ad84ff');
  title.style('font-size', theWidth/600 + 'em');
  title.style('font-weight', 'bold');
  title.style('textAlign', 'center');
  html5Objs.push(title);
  for(var i = 0; i <= 8; i++)
    {
        var y = i * 50;
        var chartInput = createInput((80-(i*10)).toString());
        chartInput.position(xLeft-35, y+37);
        chartInput.size(30, 20);        
        chartInput.style('border-style', 'solid');
        chartInput.style('border-width', '0.2em');
        html5Objs.push(chartInput);
    }
    
  for(var i = 0; i < 6; i++)
  {
      var chartLabel = createInput('Label ' + (i + 1));
      chartLabel.position(labelLeft+i*labelGap, yButtons);
      chartLabel.size(70, 20);
      chartLabel.style('textAlign', 'center');
      var upButton = createImg('arrowupgreen.png');
      upButton.position(labelLeft+15+i*labelGap, yButtons+20);
      upButton.size(20, 20);
      upButton.style('--bar', i);
      upButton.elt.id = i;
      upButton.elt.addEventListener("click", function(e) {
          if(bars[this.id] < 8)
            bars[this.id] += 0.5;
      });
      var downButton = createImg('arrowdownred.png');
      downButton.position(labelLeft+40+i*labelGap, yButtons+20);
      downButton.size(20, 20);
      downButton.style('--bar', i);
      downButton.elt.id = i;
      downButton.elt.addEventListener("click", function(e) {
          if(bars[this.id] > 0)
            bars[this.id] -= 0.5;
      });
      html5Objs.push(chartLabel);
      html5Objs.push(upButton);
      html5Objs.push(downButton);
  }
  var xAxisLabel = createInput('Click here to label the x-axis');
  xAxisLabel.style('font-size', '1.2em');
  xAxisLabel.style('textAlign', 'center');
  xAxisLabel.size(theWidth-(baseMargin*2), 30);
  xAxisLabel.position(baseMargin, yButtons+50);
  html5Objs.push(xAxisLabel);
  var yAxisLabel = createInput('Click here to label the y-axis');
  yAxisLabel.style('-webkit-transform: rotate(-90deg);');
  yAxisLabel.style('-moz-transform: rotate(-90deg);');
  yAxisLabel.position(-130, 230);
  yAxisLabel.size(300, 30);
  yAxisLabel.style('font-size', '1.2em');
  yAxisLabel.style('textAlign', 'center');
  html5Objs.push(yAxisLabel);
}
function draw() {
    background(255, 255, 255);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(0, 0, theWidth - 1, 540 - 1);
    for(var i = 0; i <= 9; i++)
    {
        var y = i * 50;
        if(i === 9)
            strokeWeight(5);
        else
            strokeWeight(1);
        line(xLeft, y, theWidth-(baseMargin*5), y);
        if(i == 9)
            baseline = y;
    }
    noStroke();
    for(var i = 0; i < 6; i++)
    {
        var x = labelLeft + 25 + i * labelGap;
        switch(i)
        {
            case 0:
                fill(255, 0, 0);
                break;
            case 1:
                fill(0, 255, 0);
                break;
            case 2:
                fill(0, 0, 255);
                break;
            case 3:
                fill(128, 128, 0);
                break;
            case 4:
                fill(128, 0, 128);
                break;
            case 5:
                fill(0, 128, 128);
                break;
        }
        rect(x, 9*50 - (50*bars[i]), 25, 50*bars[i]+10);
    }
}