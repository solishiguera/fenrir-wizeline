const express = require('express')
const router = express.Router()
const CommentController = require('../controller/comment.controller')


router.post('/', CommentController.addComment);
router.get('/question/:id', CommentController.getCommentsQuestion);
router.get('/:id', CommentController.getCommentWithId);


module.exports= router;