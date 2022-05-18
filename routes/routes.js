const express = require('express');
const router = express.Router();
const SecureEnv = require('../config/security/security')

router.use('/questions', SecureEnv.authenticateToken, require('./questions'));
router.use('/comment', SecureEnv.authenticateToken, require('./comment'));
router.use('/employee', require('./employee'));
router.use('/admin', SecureEnv.authenticateToken, require('./admin'));
router.use('/department', SecureEnv.authenticateToken, require('./department'));
router.use('/like', SecureEnv.authenticateToken, require('./like'));
router.use('/auth', require('./auth'));

module.exports = router;