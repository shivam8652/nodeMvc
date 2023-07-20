const pool = require('./../Config/mysql_conf');

const select = (pool,query, params = []) => {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  const insert = (pool,query, values) => {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

const Update = (pool,query, values, condition) => {
    return new Promise((resolve, reject) => {
      pool.query(query, [values, condition], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  const Delete = (query, condition) => {
    return new Promise((resolve, reject) => {
      connection.query(query, condition, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
module.exports = {select,insert,Update,Delete};