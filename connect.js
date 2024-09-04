const mongoose = require('mongoose');

async function connectToMongdb(url){
    return mongoose.connect(url);
}

module.exports = {connectToMongdb}