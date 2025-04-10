const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.createCategory = async (name) => {
  const uuid = uuidv4();
  const [result] = await db.execute('INSERT INTO categories (name, uuid) VALUES (?, ?)', [name, uuid]);
  return result;
};

exports.getAllCategories = async () => {
  const [rows] = await db.execute('SELECT * FROM categories');
  return rows;
};
