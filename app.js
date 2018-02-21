'use strict';

var imageProducts = [];
var ulEl = document.getElementById('list');
var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var numberOfUserClicks = 0;
var imageArray = [null, null, null];

//constructor function
function ImageConstruct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
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
new ImageConstruct('cthulhu', 'img/cthulhu.jpg');
new ImageConstruct('dog-duck', 'img/dog-duck.jpg');
new ImageConstruct('dragon', 'img/dragon.jpg');
new ImageConstruct('pen', 'img/pen.jpg');
new ImageConstruct('pet-sweep', 'img/pet-sweep.jpg');
new ImageConstruct('scissors', 'img/scissors.jpg');
new ImageConstruct('shark', 'img/shark.jpg');
new ImageConstruct('sweep', 'img/sweep.png');
new ImageConstruct('tauntaun', 'img/tauntaun.jpg');
new ImageConstruct('unicorn', 'img/unicorn.jpg');
new ImageConstruct('usb', 'img/usb.gif');
new ImageConstruct('water-can', 'img/water-can.jpg');


//random number generator for showing images
function randomNumber() {
  return Math.floor(Math.random() * imageProducts.length);
}

//creates a 3-index array for the left center and right pictures
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
  console.log(imageArray);
  return imageArray;
}

//something is very wrong here
function checkForDuplicates() {
  while
  ( imageArray[0] === imageArray[1] ||
    imageArray[0] === imageArray[2] ||
    imageArray[1] === imageArray[2] ||
    imageProducts[imageArray[0]].previouslyShowed === true ||
    imageProducts[imageArray[1]].previouslyShowed === true ||
    imageProducts[imageArray[2]].previouslyShowed === true) {
    console.log('duplicate');
    addToImageArray();
  }
  return imageArray;
}

// function checkForPrevious() {
//   while
//   (imageProducts[imageArray[0]].previouslyShowed === true ||
  // imageProducts[imageArray[1]].previouslyShowed === true ||
  // imageProducts[imageArray[0]].previouslyShowed === true ) {
//     console.log('previously showed');
//     addToImageArray();
//   }
//   return imageArray;
// }

function createPicture(imgEl, placeInArray){
  imgEl.src = imageProducts[imageArray[placeInArray]].filepath;
  imgEl.alt = imageProducts[imageArray[placeInArray]].name;
  imgEl.title = imageProducts[imageArray[placeInArray]].name;
  imageProducts[imageArray[placeInArray]].timesShown += 1;
  imageProducts[imageArray[placeInArray]].previouslyShowed = true;
  for (var i =0; i < imageProducts.length; i++) {
    if (imgEl.title !== imageProducts[i].name) {
      imageProducts[i].previouslyShowed = false;
    }
  }
}

function render() {
  addToImageArray();
  checkForDuplicates();
  //checkForPrevious();
  createPicture(leftImage, 0);
  createPicture(centerImage, 1);
  createPicture(rightImage, 2);
  numberOfUserClicks ++;
  if (numberOfUserClicks > 5) {
    ulEl.removeEventListener('click', render);
    console.log('this is broken');
  }
  return numberOfUserClicks;
}

function handleClick(event) {
  console.log(event.target.alt);
  for (var i = 0; i < imageProducts.length; i++) {
    if (event.target.alt === imageProducts[i].name) {
      console.log('CLICK', numberOfUserClicks)
      imageProducts[i].timesClicked += 1;
    }
  }
  render();
}

render();

ulEl.addEventListener('click', handleClick);


//event listener to handle clicks on images which clears, appends and adds to times clicked and showed
//render function to have initial pictures
