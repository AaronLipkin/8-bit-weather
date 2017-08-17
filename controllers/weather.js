const express = require('express');
const router = express.Router();
const getWeatherData = require('../bin/weather.js')

router.get('/:lat/:lng', (req, res) => {
  getWeatherData(res, req.params.lat, req.params.lng)
});

router.post('/', (req, res) => {
  getWeatherData(res, body)
});



module.exports = router;


