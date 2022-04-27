const express = require('express')
const router = express.Router()
const userControllers = require('../controller/comment')


//Añadir comentario
router.post('/', userControllers.addComment);
//Obtener todos los comentarios asociados a una pregunta
router.get('/:id',userControllers.getCommentsQuestion);
//Buscar comentario con id comentario
router.get('/commentId/:id',userControllers.getCommentWithId);


module.exports= router;