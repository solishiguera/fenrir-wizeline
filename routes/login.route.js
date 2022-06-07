const express = require('express')
const router = express.Router()
const LoginController = require('../controller/employee.controller')


/**
 * @deprecated Use /auth instead.
*/
router.post('/', LoginController.login);
router.delete('/', LoginController.logout);
router.post('/token', LoginController.token);
module.exports = router;