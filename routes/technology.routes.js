const technologiesController = require('../controllers/technology.controller.js');
const router = require('express').Router();

router.get('/', technologiesController.findAll);
router.get('/:id', technologiesController.findOne);
router.patch('/:id', technologiesController.update);
router.delete('/:id', technologiesController.delete);
router.post('/', technologiesController.create);

module.exports = router;
