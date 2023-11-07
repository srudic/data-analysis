// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
const fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile(
  "data/apartments-near-Ciovo.json",
  //   "Users/Sanja/Desktop/analiza-podataka-apartmani/data/apartments-near-Ciovo.json",
  "utf8",
  function (err, data) {
    // Display the file content
    console.log(data);
  }
);

console.log("readFile called");
