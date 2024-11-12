// // // models/Transaction.js
// // const mongoose = require("mongoose");

// // // List of 20 Indian banks
// const bankList = [
//   "State Bank of India",
//   "HDFC Bank",
//   "ICICI Bank",
//   "Axis Bank",
//   "Kotak Mahindra Bank",
//   "Punjab National Bank",
//   "Bank of Baroda",
//   "Canara Bank",
//   "Union Bank of India",
//   "IndusInd Bank",
//   "IDFC First Bank",
//   "Yes Bank",
//   "Indian Bank",
//   "Central Bank of India",
//   "Bank of India",
//   "UCO Bank",
//   "Punjab & Sind Bank",
//   "IDBI Bank",
//   "RBL Bank",
//   "Federal Bank",
// ];

// // const TransactionSchema = new mongoose.Schema({
// //   transactionNo: { type: String, required: true },
// //   date: { type: Date, required: true },
// //   accountType: { type: String, enum: ["Account Transfer"], required: true },
// //   bankFrom: { type: String, enum: bankList, required: true }, // From bank must be one of the 20 listed
// //   bankTo: { type: String, enum: bankList, required: true }, // To bank must be one of the 20 listed
// //   transferType: { type: String, required: true },
// //   amount: { type: Number, required: true },
// //   description: { type: String },
// // });

// // module.exports = mongoose.model("transaction", TransactionSchema);
// // models/transaction.js
// const mongoose = require('mongoose');

// const TransactionSchema = new mongoose.Schema({
//   transactionNo: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   accountType: {
//     type: String,
//     required: true,
//   },
//   fromBank: {
//     type: String,
//     required: true,
//     // enum: bankList,
//   },
//   toBank: {
//     type: String,
//     required: true,
//     // enum: bankList,
//   },
//   transferType: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: false,
//   },
// });

// module.exports = mongoose.model('Transaction', TransactionSchema);

// models/Transaction.js
const mongoose = require("mongoose");

// Expanded list of 30 Indian banks
const bankList = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "IndusInd Bank",
  "IDFC First Bank",
  "Yes Bank",
  "Indian Bank",
  "Central Bank of India",
  "Bank of India",
  "UCO Bank",
  "Punjab & Sind Bank",
  "IDBI Bank",
  "RBL Bank",
  "Federal Bank",
  // Added 10 more banks
  "Saraswat Bank",
  "Tamilnad Mercantile Bank",
  "Karur Vysya Bank",
  "South Indian Bank",
  "Jammu & Kashmir Bank",
  "Suryoday Small Finance Bank",
  "Ujjivan Small Finance Bank",
  "ESAF Small Finance Bank",
  "Equitas Small Finance Bank",
  "DCB Bank",
];

// Transaction Schema
const TransactionSchema = new mongoose.Schema({
  transactionNo: {
    type: String,
    required: true,
    unique: true, // Ensures transactionNo is unique
  },
  date: {
    type: Date,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["Account Transfer"], // Assuming it's for account transfers
    required: true,
  },
  fromBank: {
    type: String,
    enum: bankList, // From bank must be one of the 30 listed
    required: true,
  },
  toBank: {
    type: String,
    enum: bankList, // To bank must be one of the 30 listed
    required: true,
  },
  transferType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
