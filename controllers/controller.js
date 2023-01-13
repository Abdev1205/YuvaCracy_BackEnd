const user = require('../models/user');
const author = require('../models/author')
const mongoose = require('mongoose')
const testApi = async (req,res,next) =>{
    res.status(200).json('Welcome to my api');
}
const authorUpload = async (req,res) =>{
    console.log(req.body.email);
    // res.send('welcome to post api')
    try {
        const file = new author({
            email: req.body.email,
            name: req.body.name,
            
        })
        let fileData = await file.save();
        console.log(fileData);
        res.status(201).send('File Upload Successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

const userUpload = async (req,res) =>{
    console.log(req.body.email);
    // res.send('welcome to post api')
    try {
        const file = new user({
            email: req.body.email,
            name: req.body.name,
            
        })
        let fileData = await file.save();
        console.log(fileData);
        res.status(201).send('File Upload Successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}


module.exports = {testApi,authorUpload,userUpload}