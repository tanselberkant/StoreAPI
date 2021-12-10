const router = require('express').Router();
const productsController = require('../controllers/productController');

// localhost:3000/api/products

router.route('/').get(productsController.getAllProducts);
router.route('/static').get(productsController.getAllProductsStatic);

module.exports = router;
