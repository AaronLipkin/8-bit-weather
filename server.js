// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const app = express();
require('dotenv').config()


//middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
  secret: "keep it secret keep it safe",
  resave: false,
  saveUninitialized: false
}));

//controllers
const user = require('./controllers/users.js');
app.use('/users', user);

const weather = require('./controllers/weather.js');
app.use('/weather', weather);

const sessions = require('./controllers/session.js');
app.use('/sessions', sessions);



//index route
app.get('/', (req, res)=>{
	res.send('yeah boiiiiii');
});





//	MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/8bitweather');
mongoose.connection.once('open', ()=>{
  console.log('mongo is connected');
});


// port
app.listen(3000, ()=>{
	console.log('listening bro');
});