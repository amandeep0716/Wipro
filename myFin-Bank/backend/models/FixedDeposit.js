const mongoose = require("mongoose");

const fixedDepositSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      amount: Number,

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
    "FixedDeposit",
    fixedDepositSchema
  );