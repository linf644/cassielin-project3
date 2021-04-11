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

      function randomizePage() {
        // getting img from airtable
        // append them randomly on usefulness page
        var itemImg = document.createElement("img");
        itemImg.classList.add("item-img");
        itemImg.src = item.fields.circle_img[0].url;
        document.querySelector(".container").appendChild(itemImg);
        // define variables for the window width and height
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        var randomElements = document.querySelectorAll(".item-img");
        // this begins a "for loop". this loops through our multiple .random-elements
        // i stands for "index". it's a variable you can name anything but we stick to the common name "i"
        for (var i = 0; i < randomElements.length; i++) {
          // get random number from top and left of window
          var randomTop = getRandomNumber(0, winHeight);
          var randomLeft = getRandomNumber(0, winWidth);
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
    });
  }