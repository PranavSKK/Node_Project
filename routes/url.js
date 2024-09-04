const express = require("express");
const { handleGenerateNewShortUrl, handleGetAnalytics } = require("../controllers/url");
const router = express.Router(); // Corrected from express.route() to express.Router()

router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:short_id", handleGetAnalytics);

module.exports = router;
