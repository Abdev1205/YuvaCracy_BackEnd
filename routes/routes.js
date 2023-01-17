const express = require('express')
const router = express.Router();
const author = require('../models/author')
const {testApi,authorUpload,userUpload ,getAllAuthor ,getAlluser ,postArticle ,getAllArticle , getIdArticle} = require('../controllers/controller')

router.get('/test',testApi);
router.get('/all/author',getAllAuthor)
router.get('/all/user',getAlluser)
router.get('/all/article',getAllArticle)
router.get('/article/:id',getIdArticle)
router.post('/author/upload',authorUpload);
router.post('/user/upload',userUpload)
router.post('/post/article',postArticle)

module.exports = router;