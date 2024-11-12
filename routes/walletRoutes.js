// /routes/walletRoutes.js
const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

// Add Wallet
router.post("/add", walletController.addWallet);

// Wallet Recharge
router.post("/recharge", walletController.rechargeWallet);

// Wallet Refund
router.post("/refund", walletController.refundWallet);

// Get Wallet Ledger
router.get("/ledger/:walletId", walletController.getLedger);

// Get All Wallets with Balance
router.get("/all", walletController.getAllWallets);

// Update Wallet
router.put("/update/:walletId", walletController.updateWallet);

// Delete Wallet
router.delete("/delete/:walletId", walletController.deleteWallet);

module.exports = router;
