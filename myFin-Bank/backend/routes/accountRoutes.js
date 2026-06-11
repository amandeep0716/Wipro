const express = require("express");
const router = express.Router();

const {deposit,withdraw,getBalance,transferMoney} = require("../controllers/accountController");

const {protect,} = require("../middleware/authMiddleware");

router.post("/deposit", protect, deposit);
router.post("/withdraw", protect, withdraw);
router.get("/balance", protect, getBalance);
router.post("/transfer",protect,transferMoney);

module.exports = router;