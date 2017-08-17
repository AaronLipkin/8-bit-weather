//	DEPENDENCIES
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();
const User = require('../models/user.js');
const getUserData = require('../bin/user.js');


//start session
router.post('/:name/:password', (req, res)=>{
  User.findOne({ name: req.params.name}, (err, foundUser)=>{
      if(req.params.password == foundUser.password){
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