const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

exports.createProduct = async (name, image, price, category_id) => {
  const uuid = uuidv4();
  const [result] = await db.execute(
    'INSERT INTO products (name, image, price, uuid, category_id) VALUES (?, ?, ?, ?, ?)',
    [name, image, price, uuid, category_id]
  );
  return result;
};

exports.getProducts = async ({ page, limit, sort, search }) => {
  let query = 'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE 1=1';
  const values = [];

  if (search) {
    query += ' AND (p.name LIKE ? OR c.name LIKE ?)';
    values.push(`%${search}%`, `%${search}%`);
  }

  if (sort) {
    query += ` ORDER BY p.price ${sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'}`;
  }

  const offset = (page - 1) * limit;
  query += ' LIMIT ? OFFSET ?';
  values.push(+limit, +offset);

  const [rows] = await db.execute(query, values);
  return rows;
};
