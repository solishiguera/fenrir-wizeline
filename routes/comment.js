const express = require('express')
const router = express.Router()
const userControllers = require('../controller/comment')


//Añadir comentario
router.post('/', userControllers.addComment);
//Obtener todos los comentarios asociados a una pregunta
router.get('/question/:id',userControllers.getCommentsQuestion);
//Buscar comentario con id comentario
router.get('/:id',userControllers.getCommentWithId);


module.exports= router;