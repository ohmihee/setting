const express = require('express');
const router = express.Router();
const main = require('./main')
const admin = require('./admin');
const user = require('./user');

router.use('/',main);
router.use('/admin',admin);
router.use('/user',user);

module.exports = router;