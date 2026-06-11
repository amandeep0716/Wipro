const User = require("../models/User");
const Account = require("../models/Account");
const Loan = require("../models/Loan");

exports.getAdminStats = async (
  req,
  res
) => {
  try {
    const totalCustomers =
      await User.countDocuments({
        role: "customer",
      });

    const totalAccounts =
      await Account.countDocuments();

    const totalLoans =
      await Loan.countDocuments();

    const pendingLoans =
      await Loan.countDocuments({
        status: "pending",
      });

    res.status(200).json({
      success: true,
      totalCustomers,
      totalAccounts,
      totalLoans,
      pendingLoans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};