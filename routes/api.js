var express = require('express');
var router = express.Router();
var apiEngine = require('../api/api');


/* GET users listing. */
router.get('/test', function(req, res, next) {
  apiEngine.test();
  res.send('respond with a resource');
});


router.get('/test2', function(req, res, next) {
    apiEngine.test2();
    res.send('respond with a resource');
  });
module.exports = router;