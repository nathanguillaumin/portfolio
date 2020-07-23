const db = require('../db.js');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

class User {
    static async getAll () {
        return db.query('SELECT * FROM users');
    }

    static async findByEmail (email) {
        return db.query('select * from users where email = ?', [email])
          .then(rows => rows[0] ? rows[0] : null);
      }

    static async login (email, password) {
        const user = await User.findByEmail(email);
        if (!user) {
          throw new Error('user not found');
        } else {
          const passwordIsValid = await argon2.verify(user.encrypted_password, password);
          if (!passwordIsValid) {
            throw new Error('incorrect password');
          } else {
            const data = { name: user.name, id: user.id };
            const token = jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn: '24h' });
            return Promise.resolve({ token, data });
          }
        }
    }

    static async userAlreadyExists (email) {
        return db.query('SELECT COUNT(id) AS count FROM users WHERE email = ?', [email]).then(rows => {
          if (rows[0].count) {
            return Promise.resolve(true);
          } else {
            return Promise.resolve(false);
          }
        });
    }

    static async create (name, email, password) {
        const hash = await argon2.hash(password);
        return db.query('insert into users (name, email, encrypted_password) values (?, ?, ?)', [name, email, hash])
          .then(res => ({ id: res.insertId, name, email }));
      }
}

module.exports = User;