

const Bank = require("../models/Bank");

exports.addBank = async (req, res) => {
  const { bankName, accountName, accountNumber, branch, ifscCode, amount } =
    req.body;
  try {
    const existingBank = await Bank.findOne({ accountNumber });
    if (existingBank) {
      return res.status(400).json({ error: "Account number already exists" });
    }

    const newBank = new Bank({
      bankName,
      accountName,
      accountNumber,
      branch,
      ifscCode,
      amount,
    });
    const savedBank = await newBank.save();
    res.status(201).json(savedBank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBanks = async (req, res) => {
  try {
    const banks = await Bank.find();
    res.status(200).json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBank = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedBank = await Bank.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updatedBank) {
      return res.status(404).json({ error: "Bank account not found" });
    }
    res.status(200).json(updatedBank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBank = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBank = await Bank.findByIdAndDelete(id);
    if (!deletedBank) {
      return res.status(404).json({ error: "Bank account not found" });
    }
    res.status(200).json({ message: "Bank account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
