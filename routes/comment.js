const express = require('express')
const router = express.Router()
const userControllers = require('../controller/comment')



router.post('/', userControllers.addComment);


module.exports= router;