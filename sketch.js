// Copyright (C) Themba Dube, 2018
// All rights reserved.

var input, button, greeting;

var xLeft = 75;
var yButtons = 460;

var bars = [ 0, 0, 0, 0, 0, 0, 0 ];
var baseline;
function barUp() {
}
function barDown() {
}
function setup() {

  // create canvas
  createCanvas(850, 540);

  textAlign(CENTER);
  textSize(50);
  
  var title = createInput('Click here to enter a title for the chart');
  title.position(125, 10);
  title.size(600, 30);
  title.style('background-color', '#ad84ff');
  title.style('font-size', '1.6em');
  title.style('font-weight', 'bold');
  title.style('textAlign', 'center');
  for(var i = 0; i <= 8; i++)
    {
        var y = i * 50;
        var chartInput = createInput((80-(i*10)).toString());
        chartInput.position(xLeft-35, y+37);
        chartInput.size(30, 20);        
        chartInput.style('border-style', 'solid');
        chartInput.style('border-width', '0.2em');
    }
    
  for(var i = 0; i < 6; i++)
  {
      var chartLabel = createInput('Label ' + (i + 1));
      chartLabel.position(85+i*120, yButtons);
      chartLabel.size(70, 20);
      chartLabel.style('textAlign', 'center');
      var upButton = createImg('arrowupgreen.png');
      upButton.position(100+i*120, yButtons+20);
      upButton.size(20, 20);
      upButton.style('--bar', i);
      upButton.elt.id = i;
      upButton.elt.addEventListener("click", function(e) {
          if(bars[this.id] < 8)
            bars[this.id] += 0.5;
      });
      var downButton = createImg('arrowdownred.png');
      downButton.position(120+i*120, yButtons+20);
      downButton.size(20, 20);
      downButton.style('--bar', i);
      downButton.elt.id = i;
      downButton.elt.addEventListener("click", function(e) {
          if(bars[this.id] > 0)
            bars[this.id] -= 0.5;
      });
  }
  var xAxisLabel = createInput('Click here to label the x-axis');
  xAxisLabel.size(400, 30);
  xAxisLabel.style('font-size', '1.2em');
  xAxisLabel.style('textAlign', 'center');
  xAxisLabel.position(200, yButtons+50);
  var yAxisLabel = createInput('Click here to label the y-axis');
  yAxisLabel.style('-webkit-transform: rotate(-90deg);');
  yAxisLabel.style('-moz-transform: rotate(-90deg);');
  yAxisLabel.position(-130, 230);
  yAxisLabel.size(300, 30);
  yAxisLabel.style('font-size', '1.2em');
  yAxisLabel.style('textAlign', 'center');
}
function draw() {
    background(255, 255, 255);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(1);
    rect(0, 0, 799, 539);
    for(var i = 0; i <= 9; i++)
    {
        var y = i * 50;
        if(i === 9)
            strokeWeight(5);
        else
            strokeWeight(1);
        line(xLeft, y, 780, y);
        if(i == 9)
            baseline = y;
    }
    noStroke();
    for(var i = 0; i < 6; i++)
    {
        var x = 110 + i * 120;
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