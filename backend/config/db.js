// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('product_app_db', 'root', 'Shrey@nk2304', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// sequelize.authenticate()
//   .then(() => console.log('MySQL connected successfully.'))
//   .catch((err) => console.error('Unable to connect to MySQL:', err));

// module.exports = sequelize;

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Shrey@nk2304',       
  database: 'product_db'
});

module.exports = pool.promise();
