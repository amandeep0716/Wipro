const mongoose = require("mongoose");

const recurringDepositSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      monthlyAmount: Number,

      tenure: Number,

      interestRate: Number,

      maturityAmount: Number,
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "RecurringDeposit",
    recurringDepositSchema
  );