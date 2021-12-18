const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const {isLoggedIn, isNotLoggedIn} = require('../middlewares');

router.get('/login',controller.login);
router.post('/login',controller.loginPost);
router.get('/join',isNotLoggedIn,controller.join);
router.post('/join',isNotLoggedIn,controller.joinPost)
router.get('/logout',isLoggedIn,controller.logout);



module.exports = router;