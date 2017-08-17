//dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


// index route
router.get('/', function(req, res){
	User.find({}, function(err, foundUser){
		res.json(foundUsers);
	});
});

//create route
router.post('/', function(req, res){
	User.create(req.body, function(err, createdUser){
		res.json(createdUser); //.json() will send proper headers in response so client knows it's json coming back
	});
});

//delete route
router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, deletedUser){
		res.json(deletedUser);
	});
});

//update route
router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedUser){
		res.json(updatedUser);
	});
});


//export
module.exports = router;