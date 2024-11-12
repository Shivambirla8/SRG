// routes/accountHeadRoutes.js
const express = require("express");
const router = express.Router();
const accountHeadController = require("../controllers/accountHeadController");

router.post("/add", accountHeadController.createAccountHead);
router.get("/", accountHeadController.getAccountHeads);
router.put("/:id", accountHeadController.updateAccountHead);
router.delete("/:id", accountHeadController.deleteAccountHead);

module.exports = router;
