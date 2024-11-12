const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  branch: { type: String, required: true },
  ifscCode: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("Bank", BankSchema);
