const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
} = require("../../controllers/shop/order-controller");

// Use the correct controller method
router.post("/create", createOrder);
router.get("/user/:userId", getAllOrdersByUser);
router.get("/:id", getOrderDetails);

module.exports = router;
