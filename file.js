const fs = require('fs');

// syncronous -> blocking
fs.writeFileSync('hello.txt', 'Hello, World!\n');

// asyncronous -> non-blocking
fs.writeFile('hello1.txt', 'async :Hello, World!', (err) => {  })

// read file
const data = fs.readFileSync('contacts.txt', 'utf8');

console.log(data);

// fs.readFile('contacts.txt', 'utf8', (err, data) => {
//     if(err) {    
//         console.log(err);}
//     else{
//         console.log(data);}

//     })

fs.appendFileSync('hello.txt', `${new Date().toString()} hellow there \n`);

fs.cpSync('hello.txt', 'hello2.txt');

// fs.unlinkSync('hello2.txt');

// console.log(fs.statSync('hello.txt'));

// fs.mkdirSync('folder1');

// fs.mkdirSync('folder2/a/b/c/', {recursive: true});



// blocking
console.log("1-because of blocking");
const re=fs.readFileSync('hello.txt', 'utf8');
console.log(re);
console.log("2-because of blocking");


// non-blocking
console.log("1-because of non-blocking");
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if(err) {    
        console.log(err);}
    else{
        console.log(data);}
    })
console.log("2-because of non-blocking");


// defaulf number of thread
// max number of threads= cpu*threads per cpu

const os = require('os');
console.log(os.cpus().length);

