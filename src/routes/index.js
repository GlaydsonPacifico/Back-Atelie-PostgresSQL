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

router.get('/categorys', getAllCategorys);
router.get('/categorys/:id', getByIdCategory);

router.post('/categorys', createCategory);
router.put('/categorys/:id', updateCategory);
router.delete('/categorys/:id');

module.exports = router;
