// controllers/websiteController.js
const Website = require("../models/Website");

// Create a new website
exports.createWebsite = async (req, res) => {
  try {
    const website = new Website(req.body);
    await website.save();
    res.status(201).json(website);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all websites
exports.getAllWebsites = async (req, res) => {
  try {
    const websites = await Website.find();
    res.json(websites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single website by ID
exports.getWebsiteById = async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (!website) return res.status(404).json({ message: "Website not found" });
    res.json(website);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a website by ID
exports.updateWebsite = async (req, res) => {
  try {
    const website = await Website.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!website) return res.status(404).json({ message: "Website not found" });
    res.json(website);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a website by ID
exports.deleteWebsite = async (req, res) => {
  try {
    const website = await Website.findByIdAndDelete(req.params.id);
    if (!website) return res.status(404).json({ message: "Website not found" });
    res.json({ message: "Website deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
