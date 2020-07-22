const technologiesController = require('../controllers/technology.controller.js');
const router = require('express').Router();

router.get('/', technologiesController.findAll);

module.exports = router;
