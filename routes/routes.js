const express = require('express');
const router = express.Router();

router.use('/questions', require('./questions'));
router.use('/comment',require('./comment'));
router.use('/employee', require('./employee'));
router.use('/admin', require('./admin'));

module.exports = router;