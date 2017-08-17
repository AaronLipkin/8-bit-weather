//dependencies
const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
 	name: String, 
 	password: { type: String, required: true },
	image: String,
	description: String,
	savedLocations: Array
});

const User = mongoose.model('User', userSchema);


//export
module.exports = User;