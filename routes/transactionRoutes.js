const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.post("/add", transactionController.addTransaction);
router.get("/", transactionController.getAllTransactions);
// Add update and delete routes here

module.exports = router;
