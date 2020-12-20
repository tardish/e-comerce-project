const express = require('express');
const router = express.Router();
const CartControllers = require('../controllers/Cart');
const passport = require('passport');
const authentication = passport.authenticate('jwt',{session: false});

router.get('/sa',authentication, CartControllers.getCartProducts);
router.get('/',authentication, CartControllers.getCart);
router.post('/', authentication,CartControllers.addCart);
router.put('/:id', authentication,CartControllers.updateCart);
router.delete('/:id', authentication,CartControllers.deleteCart);

module.exports = router;