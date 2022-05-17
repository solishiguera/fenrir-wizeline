const express = require('express')
const router = express.Router()
const userControllers = require('../controller/questions')

router.get('/', userControllers.getAllQuestions)
router.get('/:id', userControllers.getQuestion)
router.post('/', userControllers.addQuestion)
router.put('/:id', userControllers.updateQuestion)
router.delete('/:id', userControllers.deleteQuestion)

//Obtener todas las preguntas asociadas a un departamento
router.get('/department/:id', userControllers.getQuestionDepartment);

module.exports = router;

