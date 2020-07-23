const User = require('../models/user.model.js');

class usersController {
    static async findAll (req, res) {
        try {
          const data = await User.getAll();
          res.status(200).send(data);
        } catch (err) {
            console.log(err.message);
          res.status(500).send({
            errorMessage: err.message || 'Some error occurred while retrieving users.'
          });
        }
      }


    static async create (req, res) {
        const userExists = await User.userAlreadyExists(req.body.email);
        if (userExists) {
          res.status(400).send({ errorMessage: 'Email already used' });
        } else {
          const clientPayloadInfos = { name: req.body.name, email: req.body.email };
          const clientPayloadPassword = { password: req.body.password };
    
          const isNotEmptyStirng = (str) => {
            return typeof str === 'string' && str.length > 0;
          };
          if (!isNotEmptyStirng(clientPayloadInfos.name) || !isNotEmptyStirng(clientPayloadInfos.email) || !isNotEmptyStirng(clientPayloadPassword.password)) {
            return res.status(422).send({ errorMessage: 'a required attribute is missing' });
          }
    
          const createdUser = await User.create(clientPayloadInfos.name, clientPayloadInfos.email, clientPayloadPassword.password);
          res.status(201).send(createdUser);
        }
    }
}

module.exports = usersController;