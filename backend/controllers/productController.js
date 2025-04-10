const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  const { name, price, category_id } = req.body;
  const image = req.file?.filename || '';
  await Product.createProduct(name, image, price, category_id);
  res.status(201).json({ message: 'Product created' });
};

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10, sort = 'asc', search = '' } = req.query;
  const products = await Product.getProducts({ page, limit, sort, search });
  res.json(products);
};
