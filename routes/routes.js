const express = require('express');
const router = express.Router();
const SecureEnv = require('../config/security/security')

router.use('/questions', SecureEnv.authenticateToken, require('./questions'));
router.use('/comment', SecureEnv.authenticateToken, require('./comment'));
router.use('/employee', SecureEnv.authenticateToken, require('./employee'));
router.use('/admin', SecureEnv.authenticateToken, require('./admin'));
router.use('/login', require('./login'));

module.exports = router;