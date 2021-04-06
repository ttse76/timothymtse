var express = require('express');
var router = express.Router();
const utils = require('mundane-utils');
let projects = require('../util/projects.json');

const Connection = require('../secrets/Connection');
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

router.get('/ree', (req, res) =>{
  const ran = utils.makeid(40);
  res.json({'test': ran});
});

module.exports = router;
