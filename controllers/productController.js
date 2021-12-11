const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors');

  const products = await Product.find({});
  res.status(200).json({ products, numberOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, numberOfProducts: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
