const {
  getAll, newCategory, updatedCategory, findById,
} = require('../models/categoryModel');

const listAll = async () => {
  const categorys = await getAll();
  return categorys;
};

const listById = async ({ id }) => {
  const category = await findById({ id });

  return category;
};

const create = async ({
  name,
}) => {
  const category = await newCategory({
    name,
  });
  return category;
};

const update = async (id, {
  name,
}) => {
  const category = await updatedCategory(id, {
    name,
  });
  return category;
};

module.exports = {
  listAll, create, update, listById,
};
