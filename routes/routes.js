const express = require('express');
const router = express.Router();
const SecureEnv = require('../config/security/security')

router.use('/questions', SecureEnv.authenticateToken, require('./questions.route'));
router.use('/comment', SecureEnv.authenticateToken, require('./comment.route'));
router.use('/employee', require('./employee.route'));
router.use('/admin', SecureEnv.authenticateToken, require('./admin.route'));
router.use('/department', SecureEnv.authenticateToken, require('./department.route'));
router.use('/like', SecureEnv.authenticateToken, require('./like.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;