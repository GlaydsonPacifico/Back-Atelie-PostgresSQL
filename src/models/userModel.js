const prisma = require('../database/client');

const getAll = async () => {
  const users = prisma.user.findMany({
    orderBy: [
      {
        first_name: 'asc',
      },
    ],
  });

  return users;
};

const newUser = async ({
  email, password, first_name, last_name, address, phone, role,
}) => {
  const newUser = prisma.user.create({
    data: {
      email,
      password,
      first_name,
      last_name,
      address,
      phone,
      role,
    },
  });
  return newUser;
};

const updatedUser = async (id, {
  email, password, first_name, last_name, address, phone, role,
}) => {
  const updatedUser = prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      password,
      first_name,
      last_name,
      address,
      phone,
      role,
    },
  });
  return updatedUser;
};

const findByEmail = async ({ email }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

const findById = async ({ id }) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

module.exports = {
  getAll, newUser, findByEmail, findById, updatedUser,
};
