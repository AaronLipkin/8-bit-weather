// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config()


//middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));


//controllers
const location = require('./controllers/locations.js');
app.use('/locations', location);

const weather = require('./controllers/weather.js');
app.use('/weather', weather);


//index route
app.get('/', (req, res)=>{
	res.send('yeah boiiiiii');
});





//	MONGOOSE CONNECTION
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/8bitweather';

mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
  console.log('mongo is connected');
});
port = process.env.PORT || 3000;

// port
app.listen(port, ()=>{
	console.log('listening bro');
});