const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    cartId: { type: String },

    cartItems: [
      {
        productId: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String },
        price: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],

    addressInfo: {
      addressId: { type: String },
      address: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: String, required: true },
      phone: { type: String, required: true },
      notes: { type: String },
    },

    orderStatus: {
      type: String,
      default: "Processing",
    },

    paymentMethod: {
      type: String,
      default: "Cash on Delivery",
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    totalAmount: { type: Number, required: true },

    orderDate: {
      type: Date,
      default: Date.now,
    },

    orderUpdateDate: {
      type: Date,
      default: Date.now,
    },

    paymentId: { type: String },
    payerId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
