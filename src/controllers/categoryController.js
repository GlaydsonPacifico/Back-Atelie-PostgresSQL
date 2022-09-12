const { validateCategory } = require('../helpers/validationSchema');
const {
  create, listAll, update, listById,
} = require('../services/categoryService');

const getAllCategorys = async (req, res, next) => {
  try {
    const categorys = await listAll();

    return res.status(200).json(categorys);
  } catch (e) {
    return next(e);
  }
};

const getByIdCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await listById({ id });
    return res.status(200).json(category);
  } catch (e) {
    return next(e);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const { error } = validateCategory(req.body);
    if (error) {
      return res.status(400).json(error.details);
    }
    const category = await create({ name });
    return res.status(201).json(category);
  } catch (e) {
    return next(e);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      name,
    } = req.body;

    const category = await update(id, {
      name,
    });
    return res.status(200).json(category);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getAllCategorys, createCategory, updateCategory, getByIdCategory,
};
