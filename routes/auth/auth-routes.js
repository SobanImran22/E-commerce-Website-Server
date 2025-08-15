const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

// ✅ Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// ✅ Check Auth with Cookie
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;
