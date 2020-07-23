const db = require('../db.js');

class Project {
    static async getAll() {
        return db.query('SELECT * from projects');
    }

    static async getOne(id) {
        return db.query('SELECT * FROM projects WHERE id = ?', [id])
            .then(rows => rows[0])
    }

    static async update (data) {
        return db.query('UPDATE projects SET ? WHERE id = ?', [data, id])
            .then(() => this.getOne(id))
    }

    static async remove (id) {
        return db.query('DELETE * FROM projects WHERE id = ?', [id])
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

    static async create (newProject) {
        return db.query('INSERT INTO projects SET ?', newProject)
            .then(res => {
                newProject.id = res.insertId;
                return newProject;
            })
    }
}

module.exports = Project;