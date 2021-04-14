// console.log("Hi, is it working?")

// load the airtable library, and call it airtable
var Airtable = require("airtable");
// console.log(Airtable);

// connect our airtable base to our website using API key
var base = new Airtable({ apiKey: "key5FuU6aQOHNX1mU" }).base(
  "appqlY3qQf7tvIfs0"
);

// get our airtable data, specify how to retrieve it
base("items").select({}).eachPage(gotPageOfItems, gotAllItems);

// an empty array to hold our data
const items = [];

// callback function that receives our data
function gotPageOfItems(records, fetchNextPage) {
  console.log("gotPageOfItems()");
  // add the records from this page to our items array
  items.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllItems(err) {
  console.log("gotAllItems()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the items
  consoleLogItems();
  showItems();
}

// just loop through the items and console.log them
function consoleLogItems() {
  console.log("consoleLogItems()");
  items.forEach((item) => {
    console.log("Item:", item);
  });
}

// loop through the airtable, and display them onto our page

function showItems() {
  console.log("showItems()");
  items.forEach((item) => {

          // getting img from airtable
      // append them randomly on color home page
      var itemImg = document.createElement("img");
      itemImg.classList.add("item-img");
      itemImg.src = item.fields.circle_img[0].url;
      document.querySelector(".image-wrapper").appendChild(itemImg);

    function randomizePage() {

      // define variables for the window width and height
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      var randomElements = document.querySelectorAll(".item-img");
      // this begins a "for loop". this loops through our multiple .random-elements
      // i stands for "index". it's a variable you can name anything but we stick to the common name "i"
      for (var i = 0; i < randomElements.length; i++) {
        // get random number from top and left of window
        var randomTop = getRandomNumber(0, winHeight - randomElements[i].offsetHeight);
        var randomLeft = getRandomNumber(0, winWidth - randomElements[i].offsetWidth);
        // update top and left position. we attach [i] after randomElements variable in your for loop
        randomElements[i].style.top = randomTop + "px";
        randomElements[i].style.left = randomLeft + "px";
      }
    }
    // call function so elements appear random on first page load
    randomizePage();
    // function that returns a random number between a min and max
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    // define color genre
    var itemColor = item.fields.color;
    // define color blob
    var redBlob = document.querySelector("#red");
    var blueBlob = document.querySelector("#blue");
    var yellowBlob = document.querySelector("#yellow");
    var whiteBlob = document.querySelector("#white");
    var blackBlob = document.querySelector("#black");

    // define color text
    showRedText = document.querySelector(".red-text");
    showBlueText = document.querySelector(".blue-text");
    showYellowText = document.querySelector(".yellow-text");
    showWhiteText = document.querySelector(".white-text");
    showBlackText = document.querySelector(".black-text");

    // hover over the color blobs, and color texts show up
    // mouse out, text disappear
    redBlob.addEventListener("mouseover", function(){
      showRedText.style.display = "block";
    })
    redBlob.addEventListener("mouseout", function(){
      showRedText.style.display = "none";
    })
    blueBlob.addEventListener("mouseover", function(){
      showBlueText.style.display = "block";
    })
    blueBlob.addEventListener("mouseout", function(){
      showBlueText.style.display = "none";
    })
    yellowBlob.addEventListener("mouseover", function(){
      showYellowText.style.display = "block";
    })
    yellowBlob.addEventListener("mouseout", function(){
      showYellowText.style.display = "none";
    })
    whiteBlob.addEventListener("mouseover", function(){
      showWhiteText.style.display = "block";
    })
    whiteBlob.addEventListener("mouseout", function(){
      showWhiteText.style.display = "none";
    })
    blackBlob.addEventListener("mouseover", function(){
      showBlackText.style.display = "block";
    })
    blackBlob.addEventListener("mouseout", function(){
      showBlackText.style.display = "none";
    })



    // click the red blob
    // if item is red, display on the page
    redBlob.addEventListener("click", function(){
      if (itemColor === "red") {
        itemImg.style.display = "block";
        itemImg.style.opacity = "1";
      }
      else {
        itemImg.style.display = "none";
      }
    })
        // click the blue blob
    // if item is blue, display on the page
    blueBlob.addEventListener("click", function(){
      if (itemColor === "blue") {
        itemImg.style.display = "block";
        itemImg.style.opacity = "1";
      }
        else {
          itemImg.style.display = "none";
        }
    })
        // click the yellow blob
    // if item is yellow, display on the page
    yellowBlob.addEventListener("click", function(){
      if (itemColor === "yellow") {
        itemImg.style.display = "block";
        itemImg.style.opacity = "1";
      }
      else {
        itemImg.style.display = "none";
      }
    })
        // click the white blob
    // if item is white, display on the page
    whiteBlob.addEventListener("click", function(){
      if (itemColor === "white") {
        itemImg.style.display = "block";
        itemImg.style.opacity = "1";
      }
      else {
        itemImg.style.display = "none";
      }
    })
        // click the black blob
    // if item is black, display on the page
    blackBlob.addEventListener("click", function(){
      if (itemColor === "black") {
        itemImg.style.display = "block";
        itemImg.style.opacity = "1";
      }
      else {
        itemImg.style.display = "none";
      }
    })

  });
}
