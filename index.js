// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home page")
});

app.get("/about", (req, res) => {
    return res.send("Hello from About page" + " hey " + req.query.name)
})

// function myHandler(res, req){
//     if(req.url === "/favicon.ico") return res.end();
//     const myUrl = url.parse(req.url, true);
//     const log = `${req.url} new req rec\n`
//     const method = `${req.method} \n`
//     fs.appendFile('log.txt', method, (err, data) => {})
//     fs.appendFile("log.txt",log, (err, data) => {
//         switch (myUrl.pathname){
//             case "/":
//                 if (req.method == "GET") res.end("Home page");
//                 break;
//             case "/about":
//                 const username = myUrl.query
//                 console.log(username)
//                 res.end("I am pranav");
//                 break;
//             case "/signup":
//                 if (req.method == "GET") res.end("This is sign up form");
//                 else if(req.method == "POST"){
//                     res.end("success");
//                 }
//             default:
//                 res.end("not found 404");
//         }        
//     })
// }
// const myServer = http.createServer(myHandler);
// myServer.listen(8000, () => console.log('server started'));

// const myServer = http.createServer(app);
app.listen(8000, () => console.log("Server started"))