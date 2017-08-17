//dependencies
const express = require('express');
const router = express.Router();
const Location = require('../models/location.js');



// index route
router.get('/', function(req, res){
	Location.find({}, function(err, foundLocation){
		res.json(foundLocation);
	});
});

router.get('/:name', function(req, res){
	Location.find({name: req.params.name}, function(err, foundLocation){
		res.json(foundLocation);
	});
});


//create route
router.post('/:name/:lat/:lng', function(req, res){
	Location.create(req.body, function(err, createdLocation){
		res.json(createdLocation); //.json() will send proper headers in response so client knows it's json coming back
	});
});



router.get('/:name', function(req, res){
	Location.find({name: req.params.name}, function(err, foundLocation){
		res.json(foundLocation);
	});
});


//delete route
router.delete('/:id', function(req, res){
	Location.findByIdAndRemove(req.params.id, function(err, deletedLocation){
		res.json(deletedLocation);
	});
});

//update route
router.put('/:id', function(req, res){
	Location.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedLocation){
		res.json(updatedLocation);
	});
});


//export
module.exports = router;