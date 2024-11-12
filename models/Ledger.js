// models/Ledger.js
const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  voucherNo: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  ledgerName: { type: String, required: true },
  accountHead: { type: String, required: true },
  transactionType: {
    type: String,
    enum: ["Receipts", "Payments"],
    required: true,
  },
  amount: { type: Number, required: true },
  remark: { type: String },
});

module.exports = mongoose.model("Ledger", ledgerSchema);
