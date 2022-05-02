const express = require('express')
const router = express.Router()
const userControllers = require('../controller/admin')


router.get('/', userControllers.getAllEmployees);
//id del comment
router.put('/:id/answer',userControllers.markAsAnswer);
//id del user
router.put('/:id',userControllers.markAsAdmin);


module.exports= router;