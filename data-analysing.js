const path = require("path");
const fs = require("fs/promises");
const XLSX = require("xlsx");

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

let forignNumbers = 0;
let nativeNumber = 0;
//// funcion filter data
const filterData = async (data) => {
  let filteredDataArray = [];
  try {
    for (let i = 0; i < data.length; i++) {
      if (
        !data[i].Phone_Number.includes("+385") &&
        data[i].Phone_Number !== ""
      ) {
        forignNumbers++;
        filteredDataArray.push({
          title: data[i].Title,
          phoneNu: data[i].Phone_Number,
        });
      } else {
        nativeNumber++;
      }
    }
  } catch (err) {
    console.log(err);
  }
  return filteredDataArray;
};

////function for writing in excel file
const writeExcelFile = async (data) => {
  try {
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
    XLSX.writeFile(workBook, "dataTable.xlsx");
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
    const data = await readFile(fileName);
    const filteredData = await filterData(data);
    await writeExcelFile(filteredData);
  });
  console.log("Done");
};

// start executing the program
main();
