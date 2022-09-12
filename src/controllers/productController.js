const { validateProduct } = require('../helpers/validationSchema');
const {
  create, listAll, update, listById,
} = require('../services/productService');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await listAll();

    return res.status(200).json(products);
  } catch (e) {
    return next(e);
  }
};

const getByIdProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await listById({ id });
    return res.status(200).json(product);
  } catch (e) {
    return next(e);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const {
      title, description, image, stock, price, category_id,
    } = req.body;

    const { error } = validateProduct(req.body);

    if (error) {
      return res.status(400).json(error.details);
    }
    const product = await create({
      title,
      description,
      image,
      stock,
      price,
      category_id,
    });
    return res.status(201).json(product);
  } catch (e) {
    return next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title, description, image, stock, price, category_id,
    } = req.body;

    const product = await update(id, {
      title,
      description,
      image,
      stock,
      price,
      category_id,
    });
    return res.status(200).json(product);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getAllProducts, createProduct, updateProduct, getByIdProduct,
};
