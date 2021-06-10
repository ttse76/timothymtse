var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/index.controller');

//get page
router.get('/', IndexController.index);

module.exports = router;
