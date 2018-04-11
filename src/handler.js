const router = require('./router');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const request = require('request');


const contentType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  jpg: 'image/jpg',
  png: 'image/png',
  ico: 'image/ico',
};

const handlePublic = (res, endpoint) => {
  const extention = endpoint.split('.')[1];
  fs.readFile(path.join(__dirname, '..', endpoint), (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType[extention]
      });
      res.end(data);
    }
  });
};

const handleInput = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;


  });

  req.on('end', () => {
    console.log(querystring.parse(data));

  });
  req.on('error', () => {
    console.log('error');
  });
};
const handleNews = (req, res) => {
  let city = 'gaza';
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${city}&api-key=ae3f05c0ba7841838ff1a1006a88e0f9`
  request(url, function(error, response, body) {
    console.log(error);
    const data = JSON.parse(body);
    const snippet = data.response.docs[0].snippet;
    const image = `https://static01.nyt.com/${data.response.docs[0].multimedia[0].url}`;
    const reportUrl = data.response.docs[0].web_url;
  });
};


const handleWeather = (req, res) => {
  // handle weather api
 res.writeHead(200, { 'Content-type': 'application/json' });
  const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=36c6a3826ec2fc32974e2115e7ca8d1c`
  request.get(urlWeather, (error, response, body) => {
    const data = JSON.parse(body);

    const main = data.main;
    const temp = main.temp;
    const pressure = main.pressure;
    const humidity = main.humidity;
    const wind = data.wind;
    const speed = wind.speed;
    // For code 501 - moderate rain icon = "10d"
    // URL is
    // http://openweathermap.org/img/w/10d.png
    // document.getElementById("weatherIconData").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //<img src="" id="weatherIconData"/>


    const weather = data.weather;
    const icon = weather[0].icon;
    const description=weather[0].description;
     // console.log(description);
    var iconUrl = `http://openweathermap.org/img/w/${icon}.png`


    res.end(body);

  })


}
const handleNotFound = () => {
  // not found page
};
module.exports = {
  handlePublic,
  handleInput,
  handleNews,
  handleWeather,
  handleNotFound,
};
