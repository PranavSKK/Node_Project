const shortid  = require('shortid');
const url = require("../models/url");

async function handleGenerateNewShortUrl(req,res){

    const body = req.body;
    if (!body.url){
        return res.status(400).json({error: 'url is required'});
    }

    const shortId = shortid.generate(8);
    await url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render('home', {
        id: shortId
    });
};

async function handleGetAnalytics(req,res) {
    const short_id = req.params.short_id
    const result = await url.findOne({shortId: short_id});
    

    return res.json({totalClicks:result.visitHistory.length,
                     analytics: result.visitHistory});
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
}