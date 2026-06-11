const Transaction = require("../models/Transaction");

// Get Transaction History
exports.getTransactions =
  async (req, res) => {
    try {
      const transactions =
        await Transaction.find({
          $or: [
            {
              sender:
                req.user.id,
            },
            {
              receiver:
                req.user.id,
            },
          ],
        }).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        transactions,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };