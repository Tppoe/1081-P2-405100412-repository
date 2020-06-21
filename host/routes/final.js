var express = require('express');
var router = express.Router();

const finalController = require('../controllers/finalController');

router.get('/project',finalController.getProject);
router.get('/t1',finalController.getT1);
router.get('/t2',finalController.getT2);
router.get('/combined',finalController.getProject);

/* GET users listing. */

  module.exports = router;
  