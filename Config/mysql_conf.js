const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'your_database_host',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
  });

module.exports = {pool};