const Loan = require("../models/Loan");
const Notification = require("../models/Notification");

// ======================
// Get All Loans
// ======================
exports.getAllLoans = async (req,res) => {
  try {
    const loans =
      await Loan.find()
        .populate(
          "user",
          "fullName email"
        )
        .sort({
          createdAt: -1,
        });

    res.status(200).json({
      success: true,
      loans,
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
// Approve Loan
// ======================
exports.approveLoan =async (req, res) => {
    try {
      const { id } = req.params;

      const loan =await Loan.findById(id);

      if (!loan) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Loan not found",
          });
      }

      loan.status =
        "approved";

      await loan.save();
      await Notification.create({
  user: loan.user,
  message:
    "✅ Your loan has been approved",
});

      res.json({
        success: true,
        message:
          "Loan Approved",
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
// Reject Loan
// ======================
exports.rejectLoan = async (req, res) => {
    try {
      const { id } = req.params;

      const loan = await Loan.findById(id);

      if (!loan) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Loan not found",
          });
      }

      loan.status =
        "rejected";

      await loan.save();
      await Notification.create({
  user: loan.user,
  message:
    "❌ Your loan has been rejected",
});

      res.json({success: true,message:"Loan Rejected",});
      
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };