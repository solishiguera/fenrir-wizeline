const express = require('express')
const router = express.Router()
const userControllers = require('../controller/comment')


router.post('/', userControllers.addComment);
router.get('/question/:id', userControllers.getCommentsQuestion);
router.get('/:id', userControllers.getCommentWithId);


module.exports= router;