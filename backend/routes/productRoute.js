const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthenticated, authorizedRoles } = require("../middleware/auth");
const {
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/userController");

const router = express.Router();

router
  .route("/admin/product/new")
  .post(isAuthenticated, authorizedRoles("admin"), createProduct);
router.route("/products").get(getAllProducts);
router
  .route("/admin/product/:id")
  .put(isAuthenticated, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticated, authorizedRoles("admin"), deleteProduct);

router.route("/review").put(isAuthenticated, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticated, deleteReview);

module.exports = router;
