const express = require('express');
const router = express.Router();

router.use('/questions', require('./questions'));
router.use('/comment',require('./comment'));



 
module.exports = router;