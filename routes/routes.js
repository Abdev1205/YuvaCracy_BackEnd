const express = require('express')
const router = express.Router();
const author = require('../models/author')
const {testApi,authorUpload,userUpload} = require('../controllers/controller')

router.get('/test',testApi);
router.post('/author/upload',authorUpload);
router.post('/user/upload',userUpload)

module.exports = router;