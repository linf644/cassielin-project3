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

      // adding size genre as a class to the container
      var itemSize = item.fields.item_size;

      // if items are categorized as small, put them in the left side of the screen
      if (itemSize === "small") {
      // adding size genre as a class to the container
      var itemImg = document.createElement("img");
              itemImg.classList.add("small-img");
      itemImg.src = item.fields.circle_img[0].url;
              document.querySelector(".left-wrapper").appendChild(itemImg);
      }
      if (itemSize === "large") {
        var itemImg = document.createElement("img");
        itemImg.classList.add("large-img");
        itemImg.src = item.fields.circle_img[0].url;
        document.querySelector(".right-wrapper").appendChild(itemImg);
      }

    });
  }

  
      