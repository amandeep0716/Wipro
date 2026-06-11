const express = require("express");

const router = express.Router();

const {getAllLoans,approveLoan,rejectLoan,} = require("../controllers/adminLoanController");

const {protect,} = require("../middleware/authMiddleware");

const {adminOnly,} = require("../middleware/roleMiddleware");

// Get all loan applications
router.get(
  "/all",
  protect,
  adminOnly,
  getAllLoans
);

// Approve loan
router.put(
  "/approve/:id",
  protect,
  adminOnly,
  approveLoan
);

// Reject loan
router.put(
  "/reject/:id",
  protect,
  adminOnly,
  rejectLoan
);

module.exports = router;