

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
  // console.log(error);
    } else {
      res.writeHead(200, {
        'Content-Type': contentType[extention],
      });
      res.end(data);
    }
  });
};

const handleInput = (req, res) => {
  res.writeHead(200, { 'Content-type': 'application/json' });

  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    const { city, code } = JSON.parse(data);
    handleNews(city, (err, arr) => {
      if (err) { return res.end('eror', err); }
      handleWeather(city, code, (err, body) => {
        if (err) { return res.end('eror', err); }
        res.end(JSON.stringify({ arr, body }));
      });
    });


  });
  req.on('error', () => {
    console.log('error');
  });
};

const handleNews = (city, cb) => {
  
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${city}&api-key=ae3f05c0ba7841838ff1a1006a88e0f9`;
  request(url, (error, response, body) => {
    // if (error) { return cb(error); }

    console.log(body);
    const data = JSON.parse(body);
    const arr = [];
    // console.log(data.response);

    data.response.docs.map((report) => {
      console.log('myrport', report);
      let imageUrl = 'http://www.neotechnocraft.com/images/NoImageFound.jpg';
      if (report.multimedia[0]) { imageUrl = `https://static01.nyt.com/${report.multimedia[0].url}`; }
      const filterdData = {
        snippet: report.snippet,
        image: imageUrl,
        reportUrl: report.web_url,
      };

      arr.push(filterdData);
    });
    // console.log(arr);
    cb(null, arr);
  });
};


const handleWeather = (city, code, cb) => {
  // handle weather api

  const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=36c6a3826ec2fc32974e2115e7ca8d1c`;
  request.get(urlWeather, (error, response, body) => {

    const data = JSON.parse(body);


    const main = data.main;
    const temp = (main.temp) - 273.15;
    const pressure = main.pressure;
    const humidity = main.humidity;
    const wind = data.wind;
    const speed = wind.speed;

    const weather = data.weather;
    const icon = weather[0].icon;
    const description = weather[0].description;

    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;


    cb(null, {
      temp, pressure, humidity, speed, icon, description, iconUrl,
    });
    // res.end(body);
  });
};
const handleNotFound = (req, res) => {
  // not found page
  res.writeHead(404, 'Content-type : text/html');
  res.end('<h1>Page not found</h1>');
};
module.exports = {
  handlePublic,
  handleInput,
  handleNews,
  handleWeather,
  handleNotFound,
};
