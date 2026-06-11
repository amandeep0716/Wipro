const Account = require("../models/Account");
const Transaction = require("../models/Transaction");
const Notification = require("../models/Notification");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

// ======================
// Deposit Money
// ======================
exports.deposit = async (req, res) => {
try {
const { amount } = req.body;

const account = await Account.findOne({user: req.user.id,});

if (!account) {return res.status(404).json({success: false,message: "Account not found",});
}

account.balance += Number(amount);

await account.save();

const transactionId = "TXN" + Date.now();

await Transaction.create({transactionId,receiver: req.user.id,amount,type: "deposit",});

res.status(200).json({success: true,message:"Amount Deposited Successfully",balance: account.balance,});


} catch (error) {
  console.log("DEPOSIT ERROR:");
  console.log(error);
  console.log(error.stack);

  res.status(500).json({success: false,message: error.message,});
}
};

// ======================
// Withdraw Money
// ======================
exports.withdraw = async (req, res) => {
try {
const { amount } = req.body;


const account = await Account.findOne({user: req.user.id,});

if (!account) {return res.status(404).json({success: false,message: "Account not found",});
}

if (account.balance < amount) {return res.status(400).json({success: false,message:"Insufficient Balance",});
}

account.balance -= Number(amount);

await account.save();

if (account.balance === 0) {

  await Notification.create({user: req.user.id,message:"⚠️ Your account balance has reached ₹0",});

  const user =await User.findById(req.user.id);

  await sendEmail(user.email,"Balance Alert","Your MyFin Bank account balance has reached ₹0.");
}

const transactionId ="TXN" + Date.now();

await Transaction.create({
  transactionId,
  sender: req.user.id,
  amount,
  type: "withdraw",
});

res.status(200).json({
  success: true,
  message:
    "Amount Withdrawn Successfully",
  balance: account.balance,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// ======================
// Get Account Balance
// ======================
exports.getBalance = async (req,res) => {
try {
const account =await Account.findOne({user: req.user.id,});


if (!account) {
  return res.status(404).json({success: false,message: "Account not found",});
}

res.status(200).json({
  success: true,
  accountNumber:
    account.accountNumber,
  balance: account.balance,
  accountType:
    account.accountType,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};
exports.transferMoney = async (req,res) => {
try {
const {receiverAccountNumber,amount,} = req.body;


const senderAccount =await Account.findOne({user: req.user.id,});

if (!senderAccount) {
  return res.status(404).json({
    success: false,
    message:
      "Sender account not found",
  });
}

const receiverAccount =await Account.findOne({accountNumber:receiverAccountNumber,});

if (!receiverAccount) {
  return res.status(404).json({
    success: false,
    message:
      "Receiver account not found",
  });
}

if (
  senderAccount.balance <
  amount
) {
  return res.status(400).json({
    success: false,
    message:
      "Insufficient Balance",
  });
}

senderAccount.balance -=Number(amount);

receiverAccount.balance +=Number(amount);


await senderAccount.save();
await receiverAccount.save();

if (
  senderAccount.balance === 0
) {

  await Notification.create({
    user: req.user.id,
    message:
      "⚠️ Your account balance has reached ₹0 after transfer",
  });

  const user =await User.findById(req.user.id);

  await sendEmail(
    user.email,
    "Balance Alert",
    "Your MyFin Bank account balance has reached ₹0 after transfer."
  );
}

const transactionId ="TXN" + Date.now();



await Transaction.create({
  transactionId,
  sender:
    senderAccount.user,
  receiver:
    receiverAccount.user,
  amount,
  type: "transfer",
});

res.status(200).json({
  success: true,
  message:
    "Fund Transfer Successful",
  transactionId,
  balance:
    senderAccount.balance,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};