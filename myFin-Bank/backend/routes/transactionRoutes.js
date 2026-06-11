const express = require("express");

const router =
  express.Router();

const {
  getTransactions,
} = require(
  "../controllers/transactionController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

router.get(
  "/history",
  protect,
  getTransactions
);

module.exports = router;