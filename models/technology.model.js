const db = require('../db.js');

class Technology {
    static async getAll () {
        return db.query('SELECT * FROM technologies');
    }
}

module.exports = Technology;