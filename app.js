'use strict';

var imageProducts = [];
var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var numberOfUserClicks = 0;
var imageArray = [null, null, null];

//constructor function
function ImageConstruct(name, filePath) {
  this.name = name;
  this.filepath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.previouslyShowed = false;
  imageProducts.push(this);
}

//creating instances
new ImageConstruct('bag', 'img/bag.jpg');
new ImageConstruct('banana', 'img/banana.jpg');
new ImageConstruct('bathroom', 'img/bathroom.jpg');
new ImageConstruct('boots', 'img/boots.jpg');
new ImageConstruct('breakfast', 'img/breakfast.jpg');
new ImageConstruct('bubblegum', 'img/bubblegum.jpg');
new ImageConstruct('chair', 'img/chair.jpg');
new ImageConstruct('cthulu', 'img/cthulu.jpg');
new ImageConstruct('dog-duck', 'img/dog-duck.jpg');
new ImageConstruct('dragon', 'img/dragon.jpg');
new ImageConstruct('pen', 'img/pen.jpg');
new ImageConstruct('pet-sweep', 'img/pet-sweep.jpg');
new ImageConstruct('scissors', 'img/scissors.jpg');
new ImageConstruct('shark', 'img/shark.jpg');
new ImageConstruct('sweep', 'img/sweep.jpg');
new ImageConstruct('tauntaun', 'img/tauntaun.jpg');
new ImageConstruct('unicorn', 'img/unicorn.jpg');
new ImageConstruct('usb', 'img/usb.gif');
new ImageConstruct('water-can', 'img/water-can.jpg');


//random number generator for showing images
function randomNumber() {
  return Math.floor(Math.random() * imageProducts.length);
}

function addToImageArray() {
  for(var i = 0; i < imageArray.length; i++){
    var addToArray = randomNumber();
    if(addToArray === imageArray[i]){
      console.log('duplicate');
      addToArray = randomNumber();
    } else {
    imageArray[i] = addToArray;
    }
  }
}

function checkPreviouslyShown() {
  for(var i = 0; i < imageProducts.length; i++) {
    if(imageProducts[i].previouslyShowed = true){
      console.log('duplicate detected');
    } else {
      console.log('no duplicate');
    }
  }
}

function render(){
  
}

//appending images to dom in the list elements
//event listener to handle clicks on images which clears, appends and adds to times clicked and showed
//render function to have initial pictures
