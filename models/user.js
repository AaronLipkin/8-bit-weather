//dependencies
const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
 	password: { type: String, required: true },
	name: String, 
	image: String,
	description: String,
	savedLocations: Array
});

const User = mongoose.model('User', userSchema);


//export
module.exports = User;