const express = require("express");
const url = require("../models/url");
const { restrictTo } = require("../middlewares/auth");
const router = express.Router(); // Corrected from express.route() to express.Router()

router.get('/admin/urls', restrictTo(["ADMIN"]), async(req, res) => {
    const allurls = await url.find({});
    return res.render("home", {
        urls: allurls
    });
});

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req,res) => {
    // if(!req.user) return res.redirect('/login');
    const allurls = await url.find({createdBy:req.user._id});
    return res.render("home", {
        urls: allurls
    });    
});

router.get("/signup", async (req,res) => {
    return res.render("signup");
})
router.get("/login", async (req,res) => {
    return res.render("login");
})

module.exports = router;
