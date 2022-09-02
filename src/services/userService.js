const {
  getAll, newUser, updatedUser, findById,
} = require('../models/userModel');

const listAll = async () => {
  const users = await getAll();
  return users;
};

const listById = async ({ id }) => {
  const user = await findById({ id });

  return user;
};

const create = async ({
  email, password, first_name, last_name, address, phone, role,
}) => {
  const user = await newUser({
    email,
    password,
    first_name,
    last_name,
    address,
    phone,
    role,
  });
  return user;
};

const update = async (id, {
  email, password, first_name, last_name, address, phone, role,
}) => {
  const user = await updatedUser(id, {
    email,
    password,
    first_name,
    last_name,
    address,
    phone,
    role,
  });
  return user;
};

module.exports = {
  listAll, create, update, listById,
};
