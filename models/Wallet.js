// /models/Wallet.js
const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  walletName: { type: String, required: true },
  accountHead: {
    type: String,
    required: true,
    enum: ["A/C Receivables", "A/C Payables", "Bank Accounts", "Bank OCC Acc"],
  },
  balance: { type: Number, default: 0 },
  ledger: [
    {
      transactionType: {
        type: String,
        enum: ["recharge", "refund"],
        required: true,
      },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Wallet", WalletSchema);
