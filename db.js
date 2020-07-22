const mysql = require('mysql');

class Database {
  init () {
    let config = {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS,
      database: process.env.DB_NAME || 'portfolio',
      connectionLimit: 10,
      multipleStatements: true
    };

    if (process.env.NODE_ENV === 'test') {
      config = {
        host: process.env.DB_HOST_TEST || 'localhost',
        port: process.env.DB_PORT_TEST || '3308',
        user: process.env.DB_USER_TEST || 'root',
        password: process.env.DB_PASS_TEST || 'root',
        database: process.env.DB_NAME_TEST || 'portfolio',
        connectionLimit: 10,
        multipleStatements: true
      };
    }

    this.connection = mysql.createPool(config);
    return this;
  }
}

module.exports = (new Database()).init();