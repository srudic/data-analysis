// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
const fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile(
  "data/apartments-near-Ciovo.json",
  //   "Users/Sanja/Desktop/analiza-podataka-apartmani/data/apartments-near-Ciovo.json", --> not working
  "utf8",
  function (err, data) {
    // Display the file content
    const parsedData = JSON.parse(data);

    console.log(parsedData.length);
    // console.log(data.map((res) => console.log(res)));
    for (let i = 0; i < parsedData.length; i++) {
      if (
        !parsedData[i].Phone_Number.includes("+385") &&
        parsedData[i].Phone_Number !== ""
      )
        console.log(parsedData[i].Phone_Number);
    }
  }
);

console.log("readFile called");
