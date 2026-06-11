const express = require("express");

const router =express.Router();

const {getAllCustomers,getAllAccounts,} = require("../controllers/adminController");

const {protect,} = require("../middleware/authMiddleware");

const {adminOnly,} = require("../middleware/roleMiddleware");

router.get(
  "/customers",
  protect,
  adminOnly,
  getAllCustomers
);

router.get(
  "/accounts",
  protect,
  adminOnly,
  getAllAccounts
);

module.exports = router;