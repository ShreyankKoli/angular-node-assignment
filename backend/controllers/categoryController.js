const Category = require('../models/categoryModel');

exports.createCategory = async (req, res) => {
  await Category.createCategory(req.body.name);
  res.status(201).json({ message: 'Category created' });
};

exports.getCategories = async (req, res) => {
  const categories = await Category.getAllCategories();
  res.json(categories);
};
