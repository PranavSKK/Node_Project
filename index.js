const path = require("path");
const express = require("express");
const app = express();
const PORT = 8000;
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

mongoose.connect('mongodb://localhost:27017/blogify').then(e => console.log("mongodb connected"));

app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'))
app.use(express.static(path.resolve('./public')));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.get("/", async (req,res) =>{
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));

