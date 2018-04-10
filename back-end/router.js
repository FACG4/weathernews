const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handlePublic();
  } else if (endpoint.includes('public')) {
    handlePublic();
  } else if (endpoint === "/city") {
    handleInput();
  } else if (endpoint === "/news") {
    handleNews();
  } else if (endpoint === "/weather") {
    handleWeather();
  } else {
    handleNotFound();
  }
}
module.exports = router;
