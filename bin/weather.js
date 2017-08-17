// OpenWeather API Key
const apiKey = process.env.API_KEY;


const getWeatherData = (res, lat, lng) => {
  
  const responseToClient = (res, data) => {
      res.send(data)
  }

  request("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&units=metric" + "&APPID=" + apiKey, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  console.log(typeof body)
  const parsedBody = JSON.parse(body) //parse our body from string to an object so we can actually access the properties
  console.log(parsedBody)
  responseToClient(res, body) //send it back to client side
  }); 






}



module.exports = getWeatherData;