// controllers/accountHeadController.js
const AccountHead = require("../models/accountHeadModel");

// Create a new account head
exports.createAccountHead = async (req, res) => {
  try {
    const accountHead = new AccountHead({
      accountHead: req.body.accountHead,
    });
    await accountHead.save();
    res.status(201).json(accountHead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all account heads
exports.getAccountHeads = async (req, res) => {
  try {
    const accountHeads = await AccountHead.find();
    res.status(200).json(accountHeads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an account head
exports.updateAccountHead = async (req, res) => {
  try {
    const accountHead = await AccountHead.findByIdAndUpdate(
      req.params.id,
      { accountHead: req.body.accountHead },
      { new: true }
    );
    if (!accountHead)
      return res.status(404).json({ message: "Account Head not found" });
    res.status(200).json(accountHead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an account head
exports.deleteAccountHead = async (req, res) => {
  try {
    const accountHead = await AccountHead.findByIdAndDelete(req.params.id);
    if (!accountHead)
      return res.status(404).json({ message: "Account Head not found" });
    res.status(200).json({ message: "Account Head deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
