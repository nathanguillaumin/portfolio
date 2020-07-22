const Technology = require('../models/technology.model.js');

class usersController {
    static async findAll (req, res) {
        try {
          const data = await Technology.getAll();
          res.status(200).send(data);
        } catch (err) {
            console.log(err.message);
            res.status(500).send({
            errorMessage: err.message || 'Some error occurred while retrieving technologies.'
          });
        }
      }
}

module.exports = usersController;