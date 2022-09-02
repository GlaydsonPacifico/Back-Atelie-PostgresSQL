const {
  create, listAll, update, listById,
} = require('../services/userService');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await listAll();

    return res.status(200).json(users);
  } catch (e) {
    return next(e);
  }
};

const getByIdUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await listById({ id });
    return res.status(200).json(user);
  } catch (e) {
    return next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const {
      email, password, first_name, last_name, address, phone, role,
    } = req.body;
    const user = await create({
      email,
      password,
      first_name,
      last_name,
      address,
      phone,
      role,
    });
    return res.status(201).json(user);
  } catch (e) {
    return next(e);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      email, password, first_name, last_name, address, phone, role,
    } = req.body;

    const user = await update(id, {
      email,
      password,
      first_name,
      last_name,
      address,
      phone,
      role,
    });
    return res.status(200).json(user);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getAllUsers, createUser, updateUser, getByIdUser,
};
