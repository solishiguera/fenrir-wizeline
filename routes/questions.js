const express = require('express')
const router = express.Router()
const userControllers = require('../controller/questions')

router.get('/', userControllers.getAllQuestions)
router.get('/:id', userControllers.getQuestion)
router.post('/', userControllers.addQuestion)
router.put('/:id', userControllers.updateQuestion)

module.exports = router;