const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/Product');
const passport = require('passport');
const authentication = passport.authenticate('jwt',{session: false});


router.get('/ca',authentication,productControllers.getCartProducts);
router.get('/', productControllers.getAllProducts);
router.get('/:id',authentication, productControllers.getOneProducts);
router.post('/', productControllers.addProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;