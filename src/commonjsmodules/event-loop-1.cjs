
const fs= require("fs");

setImmediate(()=> console.log("set immediate"));

setTimeout(()=> console.log('set timeout'), 0);
process.nextTick(() => console.log("Prcoess nexttick"));


Promise.resolve("Promise").then(console.log);

fs.readFile('./file.txt', 'utf8', () => console.log(" file read"));


console.log("last line of the code")