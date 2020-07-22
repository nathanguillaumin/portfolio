const db = require('../db.js');

class User {
    static async getAll () {
        return db.query('SELECT * FROM users');
    }
}

module.exports = User;