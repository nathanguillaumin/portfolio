const projectsController = require('../controllers/project.controller.js');
const router = require('express').Router();

router.get('/', projectsController.findAll);
router.get('/:id', projectsController.findOne);
router.patch(':id', projectsController.update);
router.delete(':id', projectsController.delete);
router.post(':id', projectsController.create);

module.exports = router;
