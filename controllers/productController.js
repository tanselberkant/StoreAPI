const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
    .sort('name')
    .select('name price')
    .limit(10)
    .skip(4);
  res.status(200).json({ products, numberOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  console.log(queryObject);
  let result = Product.find(queryObject);
  // sorting
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  //selecting certain fields of products
  if (fields) {
    const fieldList = fields.split(',').join(' ');
    result = result.select(fieldList);
  }

  // Pagination settings  
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 8;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit)

  const products = await result;
  res.status(200).json({ products, numberOfProducts: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
