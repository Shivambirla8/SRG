const mongoose = require("mongoose");

const VoucherSchema = new mongoose.Schema({
  voucherNumber: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  expenseType: {
    type: String,
    required: true,
    enum: ["Petrol Expense", "House Rent", "Travel Expense", "Office Expense", "Office Supplies"],
  },
  paymentType: {
    type: String,
    required: true,
    enum: ["Bank Payment", "Cash Payment"],
  },
  bankName: {
    type: String,
    enum: ["HDFC Bank", "SBI", "PNB", "ICICI Bank", "Axis Bank", "Vidarbha Bank"],
  },
  amount: { type: Number, required: true },
  balanceAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Voucher", VoucherSchema);
