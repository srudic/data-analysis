const path = require("path");
const fs = require("fs/promises");

//// function for reading all files inside directory
const readFilesInsideDirectory = async (directoryPath) => {
  const arrayOfFiles = [];
  try {
    const nameOfFilesObject = await fs.readdir(directoryPath);
    for (let filename of nameOfFilesObject) {
      arrayOfFiles.push(filename);
    }
  } catch (err) {
    console.log(err);
  }
  return arrayOfFiles;
};

//// function for reading one file
const readFile = async (fileName) => {
  let data = [];
  try {
    const filePath = `data/${fileName}`;
    const fileData = await fs.readFile(filePath, { encoding: "utf8" });
    data = JSON.parse(fileData);
  } catch (err) {
    console.log(err);
  }
  return data;
};

const main = async () => {
  const filesArray = await readFilesInsideDirectory(process.cwd() + "/data");

  // read individual files
  // -->> some kind of loop
  //  ---- ---- > send file name to function and just wait for the result of the data inside :)

  filesArray.forEach(async (fileName) => {
    let data = await readFile(fileName);
    console.log(data);
  });

  console.log("Files Array", filesArray);
};

// start executing the program
main();
