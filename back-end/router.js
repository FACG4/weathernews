const handler = require ('./handler')
const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handler.handlePublic(res, '/index.html');
  } else if (endpoint.includes('public/')) {
    console.log(endpoint);
    handler.handlePublic (res, endpoint);
  } else if (endpoint === "/city") {
    handler.handleInput(req, res);
  } else if (endpoint === "/news") {
    handler.handleNews(req, res);
  } else if (endpoint === "/weather") {
    handler.handleWeather();
  } else {
    handler.handlePublic (res, endpoint);
    handler.handleNotFound(req, res);
  }
}
module.exports = router;
