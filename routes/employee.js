const express = require('express')
const router = express.Router()
const userControllers = require('../controller/employee')

router.post('/', userControllers.addEmployee)
router.put('/:id', SecureEnv.authenticateToken, userControllers.updateEmployee)
router.delete('/:id', SecureEnv.authenticateToken, userControllers.deleteEmployee)

module.exports = router;