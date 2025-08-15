// paypal.js
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Change to "live" for production
  client_id: "your-client-id",
  client_secret: "your-client-secret",
});

module.exports = paypal;
