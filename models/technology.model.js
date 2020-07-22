const db = require('../db.js');

class Technology {
    static async getAll () {
        return db.query('SELECT * FROM technologies');
    }

    static async getOne(id) {
        return db.query('SELECT * FROM technologies WHERE id = ?', [id])
            .then(rows => rows[0])
    }

    static async updateOne (data, id) {
        return db.query('UPDATE technologies SET ? WHERE id = ?', [data, id])
            .then(rows => rows[0])
    }

    static async remove (id) {
        return db.query('DELETE * FROM technologies WHERE id = ?', [id])
            .then(res => {
                if (res.affectedRows !== 0) {
                    return Promise.resolve();
                } else {
                    const err = new Error();
                    err.kind = 'not_found';
                    return Promise.reject(err);
                  }
                });
    }

    static async create (newMessage) {
        return db.query('INSERT INTO technologies SET ?', newMessage)
            .then(res => {
                newMessage.id = res.insertId;
                return newMessage;
            })
    }
}

module.exports = Technology;