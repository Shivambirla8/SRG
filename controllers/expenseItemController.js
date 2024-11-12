const ExpenseItem = require("../models/ExpenseItem");

exports.getAllExpenseItems = async (req, res) => {
  try {
    const items = await ExpenseItem.find();
    res.json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve expense items", error });
  }
};

exports.addExpenseItem = async (req, res) => {
  try {
    const newItem = new ExpenseItem(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Failed to create expense item", error });
  }
};

exports.updateExpenseItem = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedItem = await ExpenseItem.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedItem)
      return res.status(404).json({ message: "Expense item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update expense item", error });
  }
};

exports.deleteExpenseItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await ExpenseItem.findByIdAndDelete(id);
    if (!deletedItem)
      return res.status(404).json({ message: "Expense item not found" });
    res.json({ message: "Expense item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete expense item", error });
  }
};
