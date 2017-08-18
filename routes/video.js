var express = require("express");
var fs = require("fs");
var request = require("request").defaults({ encoding: null });
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
 /* const head = {
    'Content-Length': 334522982,
    'Content-Type': 'video/mp4',
  }
  res.writeHead(200, head)
  */
  request.get('https://drcedx.blob.core.windows.net/asset-733253c5-0b3b-4517-b17d-10e0743a6752/4.1.5.mp4?sv=2012-02-12&sr=c&si=de4c674c-f211-472e-8dd8-c5256ed05340&sig=jnvuiKo17mlIVz3Yh827YukxLs1KaPO4jnOGHilRgj0%3D&se=2027-05-29T07%3A00%3A31Z')
  .pipe(res)  
  
});

module.exports = router;
