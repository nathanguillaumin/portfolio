const Project = require('../models/project.model.js');

class projectsController {
    static async findAll (req, res) {
        try {
            const data = await Project.getAll();
            res.status(200).send(data);
          } catch (err) {
              console.log(err.message);
              res.status(500).send({
              errorMessage: err.message || 'Some error occurred while retrieving technologies.'
            });
          }
    }

    static async findOne (req, res) {
        const id = req.params.id;
        try {
            const payload = await Project.getOne(id);
            res.status(200).send(payload);
        }
        catch(err) {
            if (err.kind === 'not_found') {
                res.status(404).send(`Project with number ${id} does not exist.`)
            } else {
                res.status(500).send('Error while trying to retrieve project number' + id)
            }
        }
    }

    static async update (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const payload = await Project.updateOne(req.body);
                res.status(200).send(payload);
            }
            catch(err) {
                    res.status(500).send('Error while trying to update project number' + id)
            }
        }
    }

    static async delete (req, res) {
        try {
          await Project.remove(req.params.id);
          res.send({ message: 'Project was deleted successfully!' });
        } catch (err) {
          if (err.kind === 'not_found') {
            res.status(404).send({
              message: `Not found project with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: 'Could not delete project with id ' + req.params.id + err
            });
          }
        }
      }

    static async create (req, res) {
        if (!req.body) {
            res.status(400).send({ errorMessage: 'Content can not be empty!' });
        } else {
            try {
                const newProject = await Project.create(req.body);
                res.status(201).send(newProject);
              } catch (err) {
                res.status(500).send({
                  errorMessage: err.message || 'Some error occurred while creating the project.'
                });
              }
        }
    }

}

module.exports = projectsController;