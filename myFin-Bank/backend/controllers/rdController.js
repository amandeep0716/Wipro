const RecurringDeposit =require("../models/RecurringDeposit");

exports.createRD =
  async (req, res) => {
    try {
      const {
        monthlyAmount,
        tenure,
        interestRate,
      } = req.body;

      const maturityAmount =
        monthlyAmount *
          tenure +
        (monthlyAmount *
          tenure *
          interestRate) /
          1200;

      await RecurringDeposit.create(
        {
          user:
            req.user.id,
          monthlyAmount,
          tenure,
          interestRate,
          maturityAmount,
        }
      );

      res.json({
        success: true,
        message:
          "RD Created Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };