const Message = require('../models/message.model.js');

class messagesController {
    static async findAll (req, res) {
        try {
            const data = await Message.getAll();
            res.status(200).send(data);
          } catch (err) {
              console.log(err.message);
              res.status(500).send({
              errorMessage: err.message || 'Some error occurred while retrieving messages.'
            });
          }
    }

    static async findOne (req, res) {
        const id = req.params.id;
        try {
            const payload = await Message.getOne(id);
            res.status(200).send(payload);
        }
        catch(err) {
            if (err.kind === 'not_found') {
                res.status(404).send(`Message with number ${id} does not exist.`)
            } else {
                res.status(500).send('Error while trying to retrieve message number' + id)
            }
        }
    }

    static async update (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const payload = await Message.updateOne(req.body, req.params.id);
                res.status(200).send(payload);
            }
            catch(err) {
                    console.log(err);
                    res.status(500).send('Error while trying to update message number ' + req.params.id)
            }
        }
    }

    static async delete (req, res) {
        try {
          await Message.remove(req.params.id);
          res.send({ message: 'Message was deleted successfully!' });
        } catch (err) {
          if (err.kind === 'not_found') {
            res.status(404).send({
              message: `Not found message with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: 'Could not delete message with id ' + req.params.id + err
            });
          }
        }
      }

      static async create (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const newMessage = await Message.create(req.body);
                res.status(201).send(newMessage);
              } catch (err) {
                  console.log(err)
                res.status(500).send({
                  errorMessage: err.message || 'Some error occurred while creating the message.'
                });
              }
        }
      }
}

module.exports = messagesController;