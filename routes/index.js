var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'GeoPlant - Login' });
});

router.get('/questions', function(req,res,next){
  res.render('questions', {title: 'Lista pitanja'});
});

module.exports = router;
