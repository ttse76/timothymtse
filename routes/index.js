var express = require('express');
var router = express.Router();
let projects = require('../util/projects.json');

//get page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Timothy Tse',
    projectNames: projects.projects,
    projObj: projects
  });
});

module.exports = router;
