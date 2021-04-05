var express = require('express');
var router = express.Router();
let projects = require('../util/projects.json');

const JSUtils = require('../util/JSUtils');
const Connection = require('../secrets/Connection');
//RS4ELnZVKQo6QlwpUiyvOCI2Tf5mwJO4XK6oIYl9
//get page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Timothy Tse',
    projectNames: projects.projects,
    projObj: projects
  });
});

router.get('/' + Connection, (req, res) => {
  res.render('weddingform.pug');
});

module.exports = router;
