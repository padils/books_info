const express = require('express');

const AuthControls= require('../controls/auth-controls')

const router = express.Router();



router.post('/login',AuthControls.login)
router.post('/logout',AuthControls.logout)
router.post('/register',AuthControls.register)
router.post('/isAuth',AuthControls.isAuth)

module.exports =router