const express = require("express");
const router = express.Router();
const bankController = require("../controllers/bankController");

router.post("/add", bankController.addBank);
router.get("/", bankController.getAllBanks);
router.put("/:id", bankController.updateBank);
router.delete("/:id", bankController.deleteBank);


module.exports = router;


