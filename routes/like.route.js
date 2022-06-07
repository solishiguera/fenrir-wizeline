const express = require('express')
const router = express.Router()
const LikeController = require('../controller/like.controller')

router.post('/', LikeController.addLike);
router.get('/question/:id', LikeController.getQuestionLikes);
router.delete('/', LikeController.removeLike);
router.get('/employee/:id', LikeController.getEmployeeLikes);


module.exports = router;