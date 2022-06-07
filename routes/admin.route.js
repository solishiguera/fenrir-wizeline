const express = require('express')
const router = express.Router()
const AdminController = require('../controller/admin.controller')

router.get('/', AdminController.getAllEmployees);
router.put('/:id/answer', AdminController.markAsAnswer);
router.put('/:id', AdminController.markAsAdmin);


module.exports = router;