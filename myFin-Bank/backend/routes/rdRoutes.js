const express =
  require("express");

const router =
  express.Router();

const {
  createRD,
} = require(
  "../controllers/rdController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

router.post(
  "/create",
  protect,
  createRD
);

module.exports = router;