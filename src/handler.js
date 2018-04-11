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

const handleWeather = () => {
  // handle weather api
};

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
