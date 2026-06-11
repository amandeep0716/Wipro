const User = require("../models/User");
const Account = require("../models/Account");

// ======================
// Get All Customers
// ======================
exports.getAllCustomers = async (req,res) => {
  try {
    const customers =await User.find({
        role: "customer",
      }).select("-password");

    res.status(200).json({
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

// ======================
// Get All Accounts
// ======================
exports.getAllAccounts = async (req,res) => {
  try {
    const accounts =await Account.find()
        .populate(
          "user",
          "fullName email"
        )
        .sort({
          createdAt: -1,
        });

    res.status(200).json({
      success: true,
      accounts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};