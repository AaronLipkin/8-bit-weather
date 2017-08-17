// dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

//controllers
const user = require('./controllers/users.js');
app.use('/users', user);

const weather = require('./controllers/weather.js');
app.use('/weather', weather);



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