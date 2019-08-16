var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/plantsFamily', function(req, res, next) {
  res.render('plantsFamily', { title: 'Porodice - grid' });
});

router.get('/plantsInsert', function(req, res, next) {
  res.render('plantsInsert', {title: 'GeoPlantWeb - Unos'});
});

router.get('/plantsMap', function(req, res, next) {
  res.render('plantsMap', {title: 'GeoPlantWeb - Map'});
});

router.get('/plantsList', function(req, res, next) {
  res.render('plantsList', {title: 'GeoPlantWeb - Lista'});
});

router.get('/plantSingle', function(req, res, next) {
  res.render('plantSingle', {title: 'GeoPlantWeb - Pregled biljke'});
});

module.exports = router;
