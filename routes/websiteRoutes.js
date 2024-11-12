// routes/websiteRoutes.js
const express = require("express");
const router = express.Router();
const websiteController = require("../controllers/websiteController");

router.post("/websites", websiteController.createWebsite); // Create
router.get("/websites", websiteController.getAllWebsites); // Read All
router.get("/websites/:id", websiteController.getWebsiteById); // Read One
router.put("/websites/:id", websiteController.updateWebsite); // Update
router.delete("/websites/:id", websiteController.deleteWebsite); // Delete

module.exports = router;
