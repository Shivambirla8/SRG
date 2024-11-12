const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/voucherController");

router.get("/", voucherController.getAllVouchers);
router.post("/", voucherController.addVoucher);
router.put("/:id", voucherController.updateVoucher);
router.delete("/:id", voucherController.deleteVoucher);

module.exports = router;
