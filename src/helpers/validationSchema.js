const Joi = require('@hapi/joi');

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const userSchema = Joi.object({
  email: Joi.string().email().lowercase()
    .required(),
  password: Joi.string().min(6).max(12).required(),
  first_name: Joi.string().max(70).required(),
  last_name: Joi.string().max(50).required(),
  address: Joi.string().max(255).required(),
  phone: Joi.string().max(11).required(),
  role: Joi.string().default('USER'),
});

const productSchema = Joi.object({
  title: Joi.string().max(50).required(),
  description: Joi.string().max(255),
  image: Joi.string(),
  stock: Joi.number().integer().required(),
  price: Joi.number().required(),
  category_id: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().max(50).required(),
});

exports.validateUser = validator(userSchema);
exports.validateProduct = validator(productSchema);
exports.validateCategory = validator(categorySchema);
