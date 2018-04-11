const router = require('./router');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

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
      res.writeHead(200, { 'Content-Type': contentType[extention] });
      res.end(data);
    }
  });
};

const handleInput = (req, res) => {
  console.log(req);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
    console.log(chunk);
    console.log(querystring.parse(chunk));
    
    
  });
  req.on('end', () => {
    console.log('data',data);
  });
  req.on('error', () => {
    console.log('error');
  });
};

const handleNews = () => {
  // handle news Api
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
