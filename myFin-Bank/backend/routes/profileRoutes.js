const express = require("express");

const router =express.Router();

const {getProfile,changePassword,} = require("../controllers/profileController");

const {protect,} = require("../middleware/authMiddleware");

router.get(
  "/me",
  protect,
  getProfile
);

router.put(
  "/change-password",
  protect,
  changePassword
);

module.exports = router;