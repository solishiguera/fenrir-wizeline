const express = require('express')
const router = express.Router()
const userControllers = require('../controller/like')

router.post('/', userControllers.addLike);
router.get('/question/:id', userControllers.getQuestionLikes);
router.get('/employee/:id', userControllers.getEmployeeLikes);
router.delete('/', userControllers.removeLike);


module.exports = router;