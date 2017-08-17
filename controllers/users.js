//dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');



// index route
router.get('/', function(req, res){
	User.find({}, function(err, foundUser){
		res.json(foundUser);
	});
});


//seed route
router.get('/seed', function(req, res){
	User.create([
	{
		name: 'blinky',
		password: 'blinky',
		image: 'https://orig01.deviantart.net/8557/f/2013/021/f/9/1blinkyghost_by_camdencc-d5s8ix5.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'pinky',
		password: 'pinky',
		image: 'https://orig12.deviantart.net/ecf8/f/2013/021/f/9/1pinkyghost_by_camdencc-d5saavl.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'inky',
		password: 'inky',
		image: 'https://orig05.deviantart.net/f745/f/2013/021/d/3/1inkyghost_by_camdencc-d5sab38.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'clyde',
		password: 'clyde',
		image: 'https://orig08.deviantart.net/977f/f/2013/021/0/2/1clydeghost_by_camdencc-d5sab7r.gif',
		description: 'wakka wakka wakka',
		savedLocations: []

	}], (err, data) => {
    		res.redirect('/users')
  		})
});

router.get('/:name', function(req, res){
	User.find({name: req.params.name}, function(err, foundUser){
		res.json(foundUser);
	});
});


//create route
router.post('/', function(req, res){
	User.create(req.body, function(err, createdUser){
		res.json(createdUser); //.json() will send proper headers in response so client knows it's json coming back
	});
});

//seed route
router.get('/seed', function(req, res){
	User.create([
	{
		name: 'blinky',
		password: 'blinky',
		image: 'https://orig01.deviantart.net/8557/f/2013/021/f/9/1blinkyghost_by_camdencc-d5s8ix5.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'pinky',
		password: 'pinky',
		image: 'https://orig12.deviantart.net/ecf8/f/2013/021/f/9/1pinkyghost_by_camdencc-d5saavl.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'inky',
		password: 'inky',
		image: 'https://orig05.deviantart.net/f745/f/2013/021/d/3/1inkyghost_by_camdencc-d5sab38.gif',
		description: 'wakka wakka wakka',
		savedLocations: []
	},
	{
		name: 'clyde',
		password: 'clyde',
		image: 'https://orig08.deviantart.net/977f/f/2013/021/0/2/1clydeghost_by_camdencc-d5sab7r.gif',
		description: 'wakka wakka wakka',
		savedLocations: []

	}], (err, data) => {
    		res.redirect('/users')
  		})
});

router.post('/:name/:password', (req, res)=>{
  User.findOne({ name: req.params.name}, (err, foundUser)=>{
        res.json(foundUser);
        console.log(foundUser);
  });
});


router.get('/:name', function(req, res){
	User.find({name: req.params.name}, function(err, foundUser){
		res.json(foundUser);
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