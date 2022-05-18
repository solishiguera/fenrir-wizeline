const express = require('express')
const router = express.Router()
const AuthController = require('../controller/auth')

router.post('/login', AuthController.login);
router.delete('/logout', AuthController.logout);
router.post('/token', AuthController.token);
router.post('/signup', AuthController.signup);

module.exports = router;