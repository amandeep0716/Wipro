const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transactionId: String,

    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    amount: Number,

    type: {
      type: String,
      enum: [
        "deposit",
        "withdraw",
        "transfer",
        "fd",
        "rd",
        "loan",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Transaction",
  transactionSchema
);