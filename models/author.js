const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const authorSchema = new Schema ({
    email:{
        type: String,
        required : true,
    },
    name:{
        type: String,
        required : true,
    }
},{timestamps:true});

module.exports = mongoose.model('authors',authorSchema);