const Loan = require("../models/Loan");

exports.applyLoan = async (req,res) => {
try {
const {
amount,
tenure,
interestRate,
} = req.body;


const monthlyRate =
  interestRate /
  12 /
  100;

const emi =
  (amount *
    monthlyRate *
    Math.pow(
      1 + monthlyRate,
      tenure
    )) /
  (Math.pow(
    1 + monthlyRate,
    tenure
  ) -
    1);

const loan =
  await Loan.create({
    user: req.user.id,
    amount,
    tenure,
    interestRate,
    emi:
      emi.toFixed(2),
  });

res.status(201).json({
  success: true,
  message:
    "Loan Application Submitted",
  loan,
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
// Get My Loans
// ======================
exports.getMyLoans = async (
  req,
  res
) => {
  try {
    const loans =
      await Loan.find({
        user: req.user.id,
      }).sort({
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