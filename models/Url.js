const moongose = require('mongoose');

const urlSchema = new moongose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now }
})



module.exports = moongose.model('Url', urlSchema);
