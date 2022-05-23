const express = require('express')
const router = express.Router()
const userControllers = require('../controller/employee')
const SecureEnv = require('../config/security/security')

router.post('/', userControllers.addEmployee)
router.put('/:id', SecureEnv.authenticateToken, userControllers.updateEmployee)
router.get('/search/:text', userControllers.getEmployeesByQuery)
router.delete('/:id', SecureEnv.authenticateToken, userControllers.deleteEmployee)

module.exports = router;