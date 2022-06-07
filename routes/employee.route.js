const express = require('express')
const router = express.Router()
const EmployeeController = require('../controller/employee.controller')
const SecureEnv = require('../config/security/security')

router.put('/:id', SecureEnv.authenticateToken, EmployeeController.updateEmployee)
router.get('/search/:text', EmployeeController.getEmployeesByQuery)
router.delete('/:id', SecureEnv.authenticateToken, EmployeeController.deleteEmployee)

module.exports = router;