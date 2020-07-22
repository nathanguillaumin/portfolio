const Technology = require('../models/technology.model.js');

class technologiesController {
    static async findAll (req, res) {
        try {
            const data = await Technology.getAll();
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
            const payload = await Technology.getOne(id);
            res.status(200).send(payload);
        }
        catch(err) {
            if (err.kind === 'not_found') {
                res.status(404).send(`Technology with number ${id} does not exist.`)
            } else {
                console.log(err)
                res.status(500).send('Error while trying to retrieve technology number ' + id)
            }
        }
    }

    static async update (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const payload = await Technology.updateOne(req.body, req.params.id);
                res.status(200).send(payload);
            }
            catch(err) {
                    console.log(err);
                    res.status(500).send('Error while trying to update technology number ' + req.params.id)
            }
        }
    }

    static async delete (req, res) {
        try {
          await Technology.remove(req.params.id);
          res.send({ message: 'Technology was deleted successfully!' });
        } catch (err) {
          if (err.kind === 'not_found') {
            res.status(404).send({
              message: `Not found technology with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: 'Could not delete technology with id ' + req.params.id + err
            });
          }
        }
      }

      static async create (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const newMessage = await Technology.create(req.body);
                res.status(201).send(newTechnology);
              } catch (err) {
                  console.log(err)
                res.status(500).send({
                  errorMessage: err.message || 'Some error occurred while creating the technology.'
                });
              }
        }
      }
}

module.exports = technologiesController;