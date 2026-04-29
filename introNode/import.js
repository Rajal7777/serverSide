// const john = require('./names');

// //object destructuring
// const { jhon: name } = require("./names");

//incase of string
const { name: newName } = require("./names");

console.log(newName);

//direct export/import
// const greeting = require("./names");

// console.log(greeting.sayHello(name));

const sayHi = require("./utils");
sayHi("slim shaddy");
