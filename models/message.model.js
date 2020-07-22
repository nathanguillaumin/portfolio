const db = require('../db.js');

class Message {
    static async getAll() {
        return db.query('SELECT * from messages');
    }

    static async getOne(id) {
        return db.query('SELECT * FROM messages WHERE id = ?', [id])
            .then(rows => rows[0])
    }

    static async updateOne (data, id) {
        return db.query('UPDATE messages SET ? WHERE id = ?', [data, id])
            .then(rows => rows[0])
    }

    static async remove (id) {
        return db.query('DELETE * FROM messages WHERE id = ?', [id])
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
        return db.query('INSERT INTO messages SET ?', newMessage)
            .then(res => {
                newMessage.id = res.insertId;
                return newMessage;
            })
    }
}

module.exports = Message;