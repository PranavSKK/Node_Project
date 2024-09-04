const fs = require("fs");
const os = require("os");

//sync blocking call 
// fs.writeFileSync("./test.txt", "Hello world");

// //Async non-blocking call
// fs.writeFile("./test.txt", "Hi async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// const result = fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
//     if (err){
//         console.log(err);
//     } else{
//         console.log(result);
//     }
// });


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `hey there \n`);
// fs.cpSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");

console.log(os.cpus().length);