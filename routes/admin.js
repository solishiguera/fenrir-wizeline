const express = require('express')
const router = express.Router()
const userControllers = require('../controller/admin')

router.get('/', userControllers.getAllEmployees);
router.put('/:id/answer', userControllers.markAsAnswer);
router.put('/:id', userControllers.markAsAdmin);


module.exports = router;