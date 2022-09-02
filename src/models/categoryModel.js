const prisma = require('../database/client');

const getAll = async () => {
  const categorys = prisma.category.findMany();

  return categorys;
};

const newCategory = async ({
  name,
}) => {
  const newCategory = prisma.category.create({
    data: {
      name,
    },
  });
  return newCategory;
};

const updatedCategory = async (id, {
  name,
}) => {
  const updatedCategory = prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  return updatedCategory;
};

const findById = async ({ id }) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

module.exports = {
  getAll, newCategory, findById, updatedCategory,
};
