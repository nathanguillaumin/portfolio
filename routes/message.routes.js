const messagesController = require('../controllers/message.controller.js');
const router = require('express').Router();

router.get('/', messagesController.findAll);
router.get('/:id', messagesController.findOne);
router.patch('/:id', messagesController.update);
router.delete('/:id', messagesController.delete);
router.post('/', messagesController.create);

module.exports = router;
