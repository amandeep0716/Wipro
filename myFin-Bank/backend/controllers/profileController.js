const User = require("../models/User");
const Account = require("../models/Account");
const bcrypt = require("bcryptjs");

// ======================
// Get Profile
// ======================
exports.getProfile = async (req,res) => {
  try {
    const user =
      await User.findById(
        req.user.id
      ).select("-password");

    const account =
      await Account.findOne({
        user: req.user.id,
      });

    res.status(200).json({
      success: true,
      user,
      account,
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
// Change Password
// ======================
exports.changePassword =
  async (req, res) => {
    try {
      const {
        currentPassword,
        newPassword,
      } = req.body;

      const user =
        await User.findById(
          req.user.id
        );

      const isMatch =
        await bcrypt.compare(
          currentPassword,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Current password is incorrect",
        });
      }

      const salt =
        await bcrypt.genSalt(10);

      user.password =
        await bcrypt.hash(
          newPassword,
          salt
        );

      await user.save();

      res.status(200).json({
        success: true,
        message:
          "Password changed successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };