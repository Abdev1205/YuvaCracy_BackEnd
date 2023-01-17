const user = require('../models/user');
const author = require('../models/author')
const article = require('../models/article')
const mongoose = require('mongoose')
const testApi = async (req, res, next) => {
    res.status(200).json('Welcome to my api');
}
const authorUpload = async (req, res) => {
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

const userUpload = async (req, res) => {
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

const getAllAuthor = async (req, res) => {
    try {
        const { email, name } = req.query;
        const queryObject = {};
        if (email) {
            queryObject.email = { $regex: email, $options: "i" };
        }
        if (name) {
            queryObject.name = { $regex: name, $options: "i" };
        }
        const allAuthor = await author.find(queryObject);
        res.status(201).send(allAuthor);
    } catch (error) {
        res.status(400).send(error.message);
    }

}
const getAlluser = async (req, res) => {
    try {
        const { email, name } = req.query;
        const queryObject = {};
        if (email) {
            queryObject.email = { $regex: email, $options: "i" };
        }
        if (name) {
            queryObject.name = { $regex: name, $options: "i" };
        }
        const allUser = await user.find(queryObject);
        res.status(201).send(allUser);
    } catch (error) {
        res.status(400).send(error.message);
    }

}

const postArticle = async (req, res) => {

    try {
        const file = new article({
            category: req.body.category,
            article: req.body.article,
            authorName: req.body.authorName,
            authorEmail: req.body.authorEmail,
            authorProfileUrl: req.body.authorProfileUrl,
            articleHeroUrl: req.body.articleHeroUrl,
            articleHeading:req.body.articleHeading
        });
        let fileData = await file.save();
        console.log(fileData);
        res.status(201).send('Post Added Sucessfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllArticle = async (req,res) =>{
    try {
        const { authorEmail, category } = req.query;
        const queryObject = {};
        if (authorEmail) {
            queryObject.authorEmail = { $regex: authorEmail, $options: "i" };
        }
        if (category) {
            queryObject.category = { $regex: category, $options: "i" };
        }
        const allArticle = await article.find(queryObject);
        res.status(201).send(allArticle);
    
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getIdArticle = async (req,res) =>{
    try {
        
        const idArticle = await article.findById(req.params.id);
        res.status(201).send(idArticle);
    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = { testApi, authorUpload, userUpload, getAllAuthor, getAlluser, postArticle ,getAllArticle ,getIdArticle }