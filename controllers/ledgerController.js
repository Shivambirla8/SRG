// controllers/ledgerController.js
const Ledger = require("../models/Ledger");

// Add a new ledger (already defined)
exports.addLedger = async (req, res) => {
  try {
    const {
      voucherNo,
      date,
      ledgerName,
      accountHead,
      transactionType,
      amount,
      remark,
    } = req.body;

    const newLedger = new Ledger({
      voucherNo,
      date,
      ledgerName,
      accountHead,
      transactionType,
      amount,
      remark,
    });

    await newLedger.save();
    res
      .status(201)
      .json({ message: "Ledger added successfully", ledger: newLedger });
  } catch (error) {
    res.status(400).json({ error: "Error adding ledger: " + error.message });
  }
};


// controllers/ledgerController.js
exports.getAllLedgers = async (req, res) => {
  try {
    const ledgers = await Ledger.find();
    res.status(200).json(ledgers);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching ledgers: ' + error.message });
  }
};

exports.getLedgerById = async (req, res) => {
  try {
    const ledgerId = req.params.id;
    const ledger = await Ledger.findById(ledgerId);

    if (!ledger) {
      return res.status(404).json({ message: 'Ledger not found' });
    }

    res.status(200).json(ledger);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching ledger: ' + error.message });
  }
};


// Update a ledger by ID
exports.updateLedger = async (req, res) => {
  try {
    const ledgerId = req.params.id;
    const updatedData = req.body;

    const ledger = await Ledger.findByIdAndUpdate(ledgerId, updatedData, {
      new: true, // Return the updated document
    });

    if (!ledger) {
      return res.status(404).json({ message: 'Ledger not found' });
    }

    res.status(200).json({ message: 'Ledger updated successfully', ledger });
  } catch (error) {
    res.status(400).json({ error: 'Error updating ledger: ' + error.message });
  }
};

// Delete a ledger by ID
exports.deleteLedger = async (req, res) => {
  try {
    const ledgerId = req.params.id;

    const ledger = await Ledger.findByIdAndDelete(ledgerId);

    if (!ledger) {
      return res.status(404).json({ message: 'Ledger not found' });
    }

    res.status(200).json({ message: 'Ledger deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting ledger: ' + error.message });
  }
};
