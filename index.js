const express = require("express");
const url = require("./models/url");
const path = require("path")  //To set path for views
const cookieParser = require("cookie-parser");
// const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
const app = express();
const PORT = 8001;
const {connectToMongdb} = require('./connect');

connectToMongdb('mongodb://localhost:27017/short_url').then(() => console.log('MongoDb connected') );

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json()); //To support json data
app.use(express.urlencoded({ extended: false}));  //To support form data
app.use(cookieParser());  //To support cookies
app.use(checkForAuthentication);

app.get('/url/:shortId', async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
        {shortId}, {$push :{visitHistory: {timestamp: Date.now()}}}
    );
    res.redirect(entry.redirectUrl);
});


//Routes
const staticRoute = require("./routes/staticRouter")
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute); //app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/", staticRoute); //app.use("/", checkAuth, staticRoute);
app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
