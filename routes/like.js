const express = require('express')
const router = express.Router()
const userControllers = require('../controller/like')

router.post('/', userControllers.addLike);
router.get('/question/:id', userControllers.getQuestionLikes);
router.delete('/', userControllers.removeLike);
router.get('/employee/:id', userControllers.getEmployeeLikes);


module.exports = router;