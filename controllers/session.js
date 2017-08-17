//	DEPENDENCIES
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();
const User = require('../models/user.js');
const getUserData = require('../bin/user.js');

//get route
router.get('/:name/:password', (req, res) => {
  console.log(req.params.name)
  getUserData(res, req.params.name, req.params.password)
});

//start session
router.post('/', (req, res)=>{
  User.findOne({ name: req.body.name}, (err, foundUser)=>{
      if(req.body.password == foundUser.password){
        req.session.currentUser = foundUser;
        res.json(foundUser);
      } else {
          res.send('GAME OVER')
      } 
  });
});

// session end
router.delete('/', (req, res)=>{
  req.session.destroy(()=>{
    res.redirect('/');
  });
});

//	EXPORT
module.exports = router;