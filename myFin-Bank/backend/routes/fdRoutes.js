const express =require("express");

const router =express.Router();

const {createFD,} = require("../controllers/fdController");

const {protect,} = require("../middleware/authMiddleware");

router.post(
  "/create",
  protect,
  createFD
);

module.exports = router;