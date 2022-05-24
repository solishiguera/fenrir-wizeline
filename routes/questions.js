const express = require('express')
const router = express.Router()
const QuestionController = require('../controller/questions')

router.get('/', QuestionController.getAllQuestions)
router.get('/:id', QuestionController.getQuestion)
router.get('/search/:text', QuestionController.getQuestionsByQuery)
router.post('/', QuestionController.addQuestion)
router.put('/:id', QuestionController.updateQuestion)
router.delete('/:id', QuestionController.deleteQuestion)

//Obtener todas las preguntas asociadas a un departamento
router.get('/department/:id', QuestionController.getQuestionDepartment);

module.exports = router;

