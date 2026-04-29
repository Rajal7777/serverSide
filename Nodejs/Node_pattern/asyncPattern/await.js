const { readFile, writeFile } = require("fs").promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

console.log("I am the 1st log"); //1st log

const start = async () => {
  try {
    //if no file found throws err
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    console.log("I am the log above await");  //3rd log
    await writeFile(
      "./content/write.txt",
      `Inside the file i will be written with first ${first} & second ${second}`,
      //this will append the file// will not over write the file content
      { flag: "a" },
      console.log("log after the log"), //4rd log
    );
  } catch (error) {
    console.log(error);
  }
};

start();
console.log("finish line"); //second log
