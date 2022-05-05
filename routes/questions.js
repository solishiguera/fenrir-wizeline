const express = require('express')
const SecureEnv = require('../config/security/security')
const router = express.Router()
const userControllers = require('../controller/questions')

router.get('/',SecureEnv.authenticateToken, userControllers.getAllQuestions)
router.get('/:id', userControllers.getQuestion)
router.post('/', userControllers.addQuestion)
router.put('/:id', userControllers.updateQuestion)
router.delete('/:id', userControllers.deleteQuestion)
router.get('/user/:id', userControllers.getQuestionWithId)

//Obtener todas las preguntas asociadas a un departamento
router.get('/department/:id', userControllers.getQuestionDepartment);



module.exports = router;

