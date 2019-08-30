var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Londres&APPID=2a71a67802f9b92c2d50796af7a01a0e&lang=pt&units=metric', function (error, response, body) {
  console.log('error:', error); // Print caso aconteça algum erro no request
  console.log('statusCode:', response && response.statusCode); // Print do status da requisição
  var parsedWeather = JSON.parse(body);
  console.log('A temperatura atual em Curitiba é ' + parsedWeather['main']['temp']); // Print na temperatura da Cidade escolhida
  console.log('Minima: ' + parsedWeather['main']['temp_min']); // Print na temperatura Minima
  console.log('Maxima: ' + parsedWeather['main']['temp_max']); // Print na temperatura Maxima
});