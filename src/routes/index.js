const { Router } = require('express');

const {
  getAllUsers, createUser, updateUser, getByIdUser,
} = require('../controllers/userController');

const {
  getAllProducts, createProduct, updateProduct, getByIdProduct,
} = require('../controllers/productController');

const {
  getAllCategorys, createCategory, updateCategory, getByIdCategory,
} = require('../controllers/categoryController');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Rota Inicial' });
});

// Users Routes
router.get('/users', getAllUsers);
router.get('/users/:id', getByIdUser);

router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id');

// Product Routes

router.get('/products', getAllProducts);
router.get('/products/:id', getByIdProduct);

router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id');

// Category Routes

router.get('/categories', getAllCategorys);
router.get('/categories/:id', getByIdCategory);

router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id');

module.exports = router;
