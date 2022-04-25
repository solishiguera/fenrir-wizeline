const express = require('express')
const router = express.Router()
const userControllers = require('../controller/employee')

router.get('/:id', userControllers.getEmployee)
router.post('/', userControllers.addEmployee)
router.put('/:id', userControllers.updateEmployee)
router.delete('/:id', userControllers.deleteEmployee)

module.exports = router;