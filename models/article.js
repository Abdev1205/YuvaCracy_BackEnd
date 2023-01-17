const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    authorEmail: {
        type: String,
        required: true,
    },
    authorProfileUrl: {
        type: String,
    },
    articleHeroUrl: {
        type: String,
    },
    articleHeading: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('articles', articleSchema);