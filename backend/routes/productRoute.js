const express= require('express');
const { getAllProducts,createProduct,updateProduct, deleteProduct} = require('../controllers/productController');
const { isAuthenticated ,authorizedRoles } = require('../middleware/auth');

const router= express.Router();

router.route('/admin/product/new').post(isAuthenticated, authorizedRoles("admin") ,createProduct);
router.route('/products').get(getAllProducts);
router.route('/admin/product/:id').put(isAuthenticated, authorizedRoles("admin") ,updateProduct)
.delete(isAuthenticated, authorizedRoles("admin") ,deleteProduct)






module.exports = router; 