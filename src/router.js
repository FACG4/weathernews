

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
      
      // (data)=>{
      // console.log('fgfgfgf',data)
      // res.end(JSON.stringify(data))
    // });
  // } else if (endpoint === "/news") {
  // } else if (endpoint === "/weather") {
  } else {
    handler.handleNotFound(req, res);

  }
}
module.exports = router;
