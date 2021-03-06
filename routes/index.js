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

router.get('/register', function(req,res, next) {
  res.render('register', {title: 'Registracija'});
});

router.get('/forgotpassword', function(req,res, next) {
  res.render('forgotpassword', {title: 'Reset passworda'});
});

router.get('/answers', function(req,res,next){
  res.render('answers', {title: 'Lista pitanja'});
});

router.get('/reportbug', function(req,res,next){
  res.render('reportbug', {title: 'Lista pitanja'});
});

module.exports = router;
