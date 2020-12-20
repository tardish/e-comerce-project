const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/Account');
const passport = require('passport');

const authentication = passport.authenticate('jwt',{session: false});


router.get('/', accountControllers.getAllAccounts);
router.post('/register', accountControllers.registerAccount);
router.post('/login', accountControllers.loginAccount);

module.exports = router;