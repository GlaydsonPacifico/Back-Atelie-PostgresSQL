const {
  getAll, newProduct, updatedProduct, findById,
} = require('../models/productModel');

const listAll = async () => {
  const product = await getAll();
  return product;
};

const listById = async ({ id }) => {
  const product = await findById({ id });

  return product;
};

const create = async ({
  title, description, image, stock, price, category_id,
}) => {
  const product = await newProduct({
    title,
    description,
    image,
    stock,
    price,
    category_id,
  });
  return product;
};

const update = async (id, {
  title, description, image, stock, price, category_id,
}) => {
  const product = await updatedProduct(id, {
    title,
    description,
    image,
    stock,
    price,
    category_id,
  });
  return product;
};

module.exports = {
  listAll, create, update, listById,
};
