var express = require('express');
var router = express.Router();
const utils = require('mundane-utils');
const LocalUtils = require('../util/Utils');
let projects = require('../util/projects.json');
const fs = require('fs');

const Guest = require('../models/Guest');

const Connection = require('../secrets/Connection');

//get page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Timothy Tse',
    projectNames: projects.projects,
    projObj: projects
  });
});
const errorCode = (code) => {
  switch(code){
    case 1:
      return 'Guest count was not a number';
  }

};
router.get('/' + Connection, (req, res) => {
  let resultMessage = '';
  if(!utils.stringIsEmpty(req.query.result) && req.query.result === 'success'){
    resultMessage = 'Guest saved Sucessfully';
  }else if(!utils.stringIsEmpty(req.query.result) && req.query.result === 'fail'){
    resultMessage = 'Guest was not saved sucessfully. ' + errorCode(Number(req.query.code));
  }
  const pageParams = {
    hasResultMessage: utils.stringIsEmpty(resultMessage) ? false : true,
    resultMessage: resultMessage,
    Connection: Connection
  }
  res.render('weddingform.pug', pageParams);
});
router.post('/submitguests', async (req, res) => {
  const data = req.body;
  if(!LocalUtils.isValidNumber(Number(data.guestCount))){
    res.redirect('/' + Connection + '?result=fail&code=1');
    return;
  }
  const newGuest = new Guest({
    name: data.guestName,
    email: data.guestEmail,
    phone: data.guestPhone,
    numguests: Number(data.guestCount)
  });

  await newGuest.save();
  res.redirect('/' + Connection + '?result=success');
});

router.get('/' + Connection + '/all', async (req, res) =>{
  const guests = await Guest.find().sort({name: 1});
  const guestCount = await LocalUtils.getCount(guests);
  const pageParams = {
    guests: guests,
    guestCount: guestCount,
    Connection: Connection
  };
  res.render('allguests.pug', pageParams);
});

router.get('/' + Connection + '/delete', async (req, res) =>{
  if(utils.objIsEmpty(req.query)){
    res.redirect('/' + Connection + '/all');
  }
  const id = req.query.id;
  await (await Guest.findOne({_id: id})).delete();
  res.redirect('/' + Connection + '/all');
});

router.get('/' + Connection + '/edit', async (req, res) => {
  if(utils.objIsEmpty(req.query)){
    res.redirect('/' + Connection + '/all');
  }
  const id = req.query.id;
  const guest = await Guest.findOne({_id: id});
  const pageParams = {
    guest: guest,
    Connection: Connection
  };
  res.render('editguest.pug', pageParams);
});

router.post('/updateguest', async (req, res) => {
  const data = req.body;
  let guest = await Guest.findOne({_id: data.guestId});
  guest.name = data.guestName;
  guest.phone = data.guestPhone;
  guest.email = data.guestEmail;
  guest.numguests = data.guestCount;
  await guest.save();
  res.redirect('/' + Connection + '/all');
});

module.exports = router;
