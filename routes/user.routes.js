const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();

router.post('/', usersController.create);
router.get('/', usersController.findAll);

module.exports = router;
