// /controllers/walletController.js
const Wallet = require("../models/Wallet");

// Add Wallet
exports.addWallet = async (req, res) => {
  try {
    const { walletName, accountHead } = req.body;
    const newWallet = new Wallet({ walletName, accountHead });
    await newWallet.save();
    res.json(newWallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Wallet Recharge
exports.rechargeWallet = async (req, res) => {
  try {
    const { walletId, amount } = req.body;
    const wallet = await Wallet.findById(walletId);
    wallet.balance += amount;
    wallet.ledger.push({ transactionType: "recharge", amount });
    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Wallet Refund
exports.refundWallet = async (req, res) => {
  try {
    const { walletId, amount } = req.body;
    const wallet = await Wallet.findById(walletId);
    wallet.balance -= amount;
    wallet.ledger.push({ transactionType: "refund", amount });
    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Wallet Ledger
exports.getLedger = async (req, res) => {
  try {
    const { walletId } = req.params;
    const wallet = await Wallet.findById(walletId);
    res.json(wallet.ledger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Wallets with Balance
exports.getAllWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find({}, "walletName accountHead balance");
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Wallet
exports.updateWallet = async (req, res) => {
  try {
    const { walletId } = req.params;
    const { walletName, accountHead } = req.body;
    const wallet = await Wallet.findById(walletId);

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    wallet.walletName = walletName || wallet.walletName;
    wallet.accountHead = accountHead || wallet.accountHead;
    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Wallet
exports.deleteWallet = async (req, res) => {
  try {
    const { walletId } = req.params;
    const wallet = await Wallet.findByIdAndDelete(walletId);

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.json({ message: "Wallet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
