const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema ({
    email:{
        type: String,
        
        
    },
    name:{
        type: String,
        
    }
},{timestamps:true});

module.exports = mongoose.model('users',userSchema)