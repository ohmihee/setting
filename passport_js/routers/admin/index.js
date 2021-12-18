const express = require('express');
const router = express.Router();
const controller = require('./controller.admin');
const {isAdminIn,isNotLoggedIn,isLoggedIn} = require('../middlewares')

//router.get('/',isAdminIn,controller.index);
router.get('/',isAdminIn,controller.index);

module.exports = router;