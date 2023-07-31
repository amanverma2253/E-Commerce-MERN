const express = require("express");
const router = express.Router();
const { isAuthenticated, authorizedRoles } = require("../middleware/auth");
const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.route("/order/new").post(isAuthenticated, createOrder);

router
  .route("/order/:id")
  .get(isAuthenticated, authorizedRoles("admin"), getSingleOrder);

router.route("/orders/me").get(isAuthenticated, myOrders);
router
  .route("/admin/orders/all")
  .get(isAuthenticated, authorizedRoles("admin"), getAllOrders);

router
  .route("/admin/orders/:id")
  .put(isAuthenticated, authorizedRoles("admin"), updateOrder)
  .delete(isAuthenticated, authorizedRoles("admin"), deleteOrder);

module.exports = router;
