'use strict';

var imageNames = [];

var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var numberOfUserClicks = 0;

function ImageConstruct(name, filePath) {
  this.name = name;
  this.filepath = 'img/' + filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
}

//constructor function that creates images with name, filepath, times showed, times clicked
//random number generator for showing images
//appending images to dom in the list elements
//event listener to handle clicks on images which clears, appends and adds to times clicked and showed
//render function to have initial pictures
