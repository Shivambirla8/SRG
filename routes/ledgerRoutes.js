// // routes/ledgerRoutes.js
// const express = require("express");
// const {
//   addLedger,
//   updateLedger,
//   deleteLedger,
//   getAllLedgers,
//   getLedgerById,
// } = require("../controllers/ledgerController");

// const router = express.Router();

// // POST route to add a ledger
// router.post("/add-ledger", addLedger);

// // PUT route to update a ledger by ID
// router.put("/update-ledger/:id", updateLedger);

// // DELETE route to delete a ledger by ID
// router.delete("/delete-ledger/:id", deleteLedger);

// // GET route to get all ledgers
// router.get("/ledgers", getAllLedgers);

// // GET route to get a ledger by ID
// router.get("/ledger/:id", getLedgerById);

// module.exports = router;
const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledgerController");

// Route to add a new ledger
router.post("/ledgers", ledgerController.addLedger);

// Route to get all ledgers
router.get("/ledgers", ledgerController.getAllLedgers);

// Route to get a ledger by ID
router.get("/ledgers/:id", ledgerController.getLedgerById);

// Route to update a ledger by ID
router.put("/ledgers/:id", ledgerController.updateLedger);

// Route to delete a ledger by ID
router.delete("/ledgers/:id", ledgerController.deleteLedger);

module.exports = router;
