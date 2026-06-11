const express =require("express");

const router =express.Router();

const {sendMessage,getMessages,getAdmin,getChatUsers,} = require("../controllers/chatController");

const {protect,} = require("../middleware/authMiddleware");

router.get(
  "/admin",
  protect,
  getAdmin
);

router.get(
  "/users/list",
  protect,
  getChatUsers
);

router.get(
  "/:receiverId",
  protect,
  getMessages
);

router.post(
  "/send",
  protect,
  sendMessage
);

module.exports =
  router;