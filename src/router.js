const path = require('path');
const handler = require ('./handler');
const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handler.handlePublic(res, path.join('public', 'index.html'));
  } else if (endpoint.includes('public') || endpoint.includes('favicon')) {
    handler.handlePublic (res, endpoint);
  } else if (endpoint === "/city") {
    handler.handleInput(req, res);
  } else if (endpoint === "/news") {
    handler.handleNews(req, res);
  } else if (endpoint === "/weather") {
    handler.handleWeather(req, res);
  } else {
    handler.handleNotFound(req, res);
    // res.writeHead(404, 'Content-type : text/html');
    // res.end('<h1>Erorr not found</h1>');
  }
}
module.exports = router;
