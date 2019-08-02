var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/plantsGrid', function(req, res, next) {
  res.render('plantsGrid', { title: 'Biljke - grid' });
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

module.exports = router;
