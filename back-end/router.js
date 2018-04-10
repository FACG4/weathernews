const handler = require ('./handler')
const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handler.handlePublic(res, endpoint);
  } else if (endpoint.includes('public')) {
    handler.handlePublic (res, endpoint);
  } else if (endpoint === "/city") {
    handler.handleInput();
  } else if (endpoint === "/news") {
    handler.handleNews();
  } else if (endpoint === "/weather") {
    handler.handleWeather();
  } else {
    handler.handleNotFound();
  }
}
module.exports = router;
