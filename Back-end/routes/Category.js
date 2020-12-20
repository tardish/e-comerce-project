const express = require('express');
const router = express.Router();
const CategoryControllers = require('../controllers/Category');



router.get('/', CategoryControllers.getCategory);


module.exports = router;