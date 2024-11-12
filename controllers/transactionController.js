
const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const {
    transactionNo,
    date,
    accountType,
    fromBank,
    toBank,
    transferType,
    amount,
    description,
  } = req.body;

  try {
    // Check for duplicate transactionNo
    const existingTransaction = await Transaction.findOne({ transactionNo });
    if (existingTransaction) {
      return res
        .status(400)
        .json({ error: "Transaction number must be unique." });
    }

    const newTransaction = new Transaction({
      transactionNo,
      date,
      accountType,
      fromBank,
      toBank,
      transferType,
      amount,
      description,
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
