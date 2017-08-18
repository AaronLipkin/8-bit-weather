//dependencies
const mongoose = require('mongoose');

//schema
const locationSchema = mongoose.Schema({
 	name: String, 
 	lat: String,
	lng: String
});

const Location = mongoose.model('Location', locationSchema);


//export
module.exports = Location;