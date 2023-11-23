// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
// const fs = require("fs");

// Use fs.readFile() method to read the file
// fs.readFile(
//   "data/apartments-near-Ciovo.json",
//   //   "Users/Sanja/Desktop/analiza-podataka-apartmani/data/apartments-near-Ciovo.json", --> not working
//   "utf8",
//   function (err, data) {
//     // Display the file content
//     const parsedData = JSON.parse(data);

//     console.log(parsedData.length);
//     // console.log(data.map((res) => console.log(res)));
//     for (let i = 0; i < parsedData.length; i++) {
//       if (
//         !parsedData[i].Phone_Number.includes("+385") &&
//         parsedData[i].Phone_Number !== ""
//       )
//         console.log(parsedData[i].Phone_Number);
//     }
//   }
// );

// console.log("readFile called");

//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "data");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});
