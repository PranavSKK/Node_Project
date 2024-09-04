const express = require('express');
const app = express();
const PORT = 8000;
// const users = require('./MOCK_DATA.json');
const { type } = require('os');
const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares")
const userRouter = require("./routes/user");

//connection mongo
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(() => console.log("MongoDb Connected!!"));

app.use(express.urlencoded({extended: false})); //To get params in req.body for formurlencoded
app.use(express.json()); //To get params in req.body for raw data json

//Middleware
app.use(logReqRes('log_txt'));

app.use((req,res, next) => {
    console.log("Hello from M1");
    req.MyUserName = 'PK'
    next();
});

app.use((req,res, next) => {
    console.log(`Hello ${req.MyUserName}`);
    next();
});


app.use("/api/users", userRouter);
app.listen(PORT, () => console.log("Server started at PORT")) 