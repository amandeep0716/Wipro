const User = require("../models/User");
const Account = require("../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =====================
// Register User/Admin
// =====================
exports.register = async (req, res) => {
  try {
    const {fullName,email,phone,password,role,} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({email,});

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
      role: role || "customer",
    });

    // Create account automatically
    const accountNumber =
      "ACC" +
      Math.floor(
        1000000000 +
          Math.random() * 9000000000
      );

    await Account.create({
      user: user._id,
      accountNumber,
      balance: 0,
      accountType: "Savings",
    });

    return res.status(201).json({
      success: true,
      message:
        "Registration successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Server Error During Registration",
    });
  }
};

// =====================
// Login User/Admin
// =====================
exports.login = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    // Check user
    const user =
      await User.findOne({
        email,
      });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid Credentials",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Login Successful",
      token,
      user: {
        id: user._id,
        fullName:
          user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Server Error During Login",
    });
  }
};