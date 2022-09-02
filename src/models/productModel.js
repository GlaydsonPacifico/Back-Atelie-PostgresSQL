const prisma = require('../database/client');

const getAll = async () => {
  const products = prisma.product.findMany({
    orderBy: [
      {
        title: 'asc',
      },
    ],
    include: {
      category: true,
    },
  });

  return products;
};

const newProduct = async ({
  title, description, image, stock, price, category_id,
}) => {
  const newProduct = prisma.product.create({
    data: {
      title,
      description,
      image,
      stock,
      price,
      category_id,
    },
    include: {
      category: true,
    },
  });
  return newProduct;
};

const updatedProduct = async (id, {
  title, description, image, stock, price, category_id,
}) => {
  const updatedProduct = prisma.product.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      image,
      stock,
      price,
      category_id,
    },
    include: {
      category: true,
    },
  });
  return updatedProduct;
};

const findByTitle = async ({ title }) => {
  const user = await prisma.product.findUnique({
    where: { title },
  });
  return user;
};

const findById = async ({ id }) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

module.exports = {
  getAll, newProduct, findByTitle, findById, updatedProduct,
};
