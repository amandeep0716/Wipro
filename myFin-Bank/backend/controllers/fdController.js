const FixedDeposit =require("../models/FixedDeposit");

const Account =require("../models/Account");

exports.createFD =
  async (req, res) => {
    try {
      const {
        amount,
        tenure,
        interestRate,
      } = req.body;

      const account =
        await Account.findOne({
          user: req.user.id,
        });

      if (
        account.balance <
        amount
      ) {
        return res
          .status(400)
          .json({
            message:
              "Insufficient Balance",
          });
      }

      account.balance -= amount;

      await account.save();

      const maturityAmount =
        amount +
        (amount *
          interestRate *
          tenure) /
          1200;

      await FixedDeposit.create({
        user:
          req.user.id,
        amount,
        tenure,
        interestRate,
        maturityAmount,
      });

      res.json({
        success: true,
        message:
          "FD Created Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };