const Chat =require("../models/Chat");
const User =require("../models/User");

// Send Message
exports.sendMessage =
  async (req, res) => {
    try {
      const {
        receiverId,
        message,
      } = req.body;

      const chat =
        await Chat.create({
          sender:
            req.user.id,
          receiver:
            receiverId,
          message,
        });

      res.status(201).json({
        success: true,
        chat,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get Chat Messages
exports.getMessages =
  async (req, res) => {
    try {
      const {
        receiverId,
      } = req.params;

      const messages =
        await Chat.find({
          $or: [
            {
              sender:
                req.user.id,
              receiver:
                receiverId,
            },
            {
              sender:
                receiverId,
              receiver:
                req.user.id,
            },
          ],
        })
          .populate(
            "sender",
            "fullName"
          )
          .sort({
            createdAt: 1,
          });

      res.json({
        success: true,
        messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

// Get Admin User
exports.getAdmin =
  async (req, res) => {
    try {
      const admin =
        await User.findOne({
          role: "admin",
        });

      res.json({
        success: true,
        admin,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };
  
// Get All Customers Who Chatted
exports.getChatUsers =
  async (req, res) => {
    try {
      const chats =
        await Chat.find()
          .populate(
            "sender",
            "fullName role"
          )
          .populate(
            "receiver",
            "fullName role"
          );

      const customers =
        [];

      chats.forEach(
        (chat) => {
          if (
            chat.sender &&
            chat.sender.role ===
              "customer"
          ) {
            const exists =
              customers.find(
                (c) =>
                  c._id.toString() ===
                  chat.sender._id.toString()
              );

            if (!exists) {
              customers.push(
                chat.sender
              );
            }
          }

          if (
            chat.receiver &&
            chat.receiver.role ===
              "customer"
          ) {
            const exists =
              customers.find(
                (c) =>
                  c._id.toString() ===
                  chat.receiver._id.toString()
              );

            if (!exists) {
              customers.push(
                chat.receiver
              );
            }
          }
        }
      );

      res.json({
        success: true,
        customers,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

