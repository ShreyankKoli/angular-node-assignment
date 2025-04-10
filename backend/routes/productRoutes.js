const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createProduct, getProducts } = require('../controllers/productController');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), createProduct);
router.get('/', getProducts);

module.exports = router;
