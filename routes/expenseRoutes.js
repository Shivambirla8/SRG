const express = require("express");
const router = express.Router();
const expenseItemController = require("../controllers/expenseItemController");

router.get("/", expenseItemController.getAllExpenseItems);
router.post("/", expenseItemController.addExpenseItem);
router.put("/:id", expenseItemController.updateExpenseItem);
router.delete("/:id", expenseItemController.deleteExpenseItem);

module.exports = router;
