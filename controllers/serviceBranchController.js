const ServiceBranch = require("../models/ServiceBranch");

// Create a new Service Branch
exports.createServiceBranch = async (req, res) => {
  try {
    const { name, serviceType } = req.body;
    const newBranch = new ServiceBranch({ name, serviceType });
    const savedBranch = await newBranch.save();
    res.status(201).json(savedBranch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Service Branches
exports.getAllServiceBranches = async (req, res) => {
  try {
    const branches = await ServiceBranch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Service Branch by ID
exports.getServiceBranchById = async (req, res) => {
  try {
    const branch = await ServiceBranch.findById(req.params.id);
    if (!branch) {
      return res.status(404).json({ message: "Service Branch not found" });
    }
    res.status(200).json(branch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Service Branch by ID
exports.updateServiceBranch = async (req, res) => {
  try {
    const { name, serviceType } = req.body;
    const updatedBranch = await ServiceBranch.findByIdAndUpdate(
      req.params.id,
      { name, serviceType },
      { new: true, runValidators: true }
    );
    if (!updatedBranch) {
      return res.status(404).json({ message: "Service Branch not found" });
    }
    res.status(200).json(updatedBranch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Service Branch by ID
exports.deleteServiceBranch = async (req, res) => {
  try {
    const deletedBranch = await ServiceBranch.findByIdAndDelete(req.params.id);
    if (!deletedBranch) {
      return res.status(404).json({ message: "Service Branch not found" });
    }
    res.status(200).json({ message: "Service Branch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};















