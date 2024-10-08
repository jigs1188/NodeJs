console.log('Hello, World!');



// const math = require('./math.js');
// console.log("math value is",math.add(5,6));
// console.log("math value is",math.subtract(5,6));



const {add, subtract} = require('./math.js');
console.log("math value is",add(5,6));
console.log("math value is",subtract(5,6));

