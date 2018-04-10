
const router = require('./router');
const fs = require('fs');
const path = require ('path');
// var request = require("request");

const contentType = {
  html : 'text/html',
  css : 'text/css',
  js : 'application/javascript',
  jpg : 'image/jpg',
  png : 'image/png',
  ico : 'image/icon'
}

const handlePublic = (res, endpoint) => {
  const splitted = endpoint.split('.');
  const extention = splitted[splitted.length-1];
  fs.readFile(path.join(__dirname,'..',`public${endpoint}`) ,(error,data)=>{
    if(error){
      console.log(error);
    }
    else {
      res.writeHead(200, {"Content-Type":contentType[extention]});
      res.end(data)
    }
  });
}

const handleInput = (req,res) => {
  let data = '';
  req.on('data',(chunk)=>{
    data += chunk;


  })
  req.on('end',()=>{
    console.log(data);
  })
  req.on('error',()=>{
    console.log('error');
  })
  // handle city name
}

const handleNews = () => {
 // handle news Api
 res.writeHead(200, {"Content-Type":application/json});
 const option = {
   url,
   method: 'GET',
 };
 req.on

}

const handleWeather = (res,req) => {

  res.writeHead(404,{"content-type": "text/html"})
  res.end('not found');





  // handle weather api
}

const handleNotFound = () => {
  // not found page
}
module.exports = {
  handlePublic ,
  handleInput,
  handleNews,
  handleWeather,
  handleNotFound
}
