const express = require('express');
const router = express.Router();
const AddressControllers = require('../controllers/Address');
const passport = require('passport');
const authentication = passport.authenticate('jwt',{session: false});

router.get('/',authentication, AddressControllers.getAddress);
router.post('/', authentication,AddressControllers.addAddress);
router.put('/:id', authentication,AddressControllers.updateAddress);
router.delete('/:id', authentication,AddressControllers.deleteAddress);

module.exports = router;