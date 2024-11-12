const ServiceCategory = require("../models/serviceCategoryModel");

// Create a new service category
exports.createServiceCategory = async (req, res) => {
  try {
    const { serviceType, description } = req.body;
    const newCategory = new ServiceCategory({ serviceType, description });
    const savedCategory = await newCategory.save();
    res
      .status(201)
      .json({ message: "Service Category created", data: savedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error creating service category", error });
  }
};

// Get all service categories
exports.getAllServiceCategories = async (req, res) => {
  try {
    const categories = await ServiceCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching service categories", error });
  }
};

// Get a service category by ID
exports.getServiceCategoryById = async (req, res) => {
  try {
    const category = await ServiceCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Service Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service category", error });
  }
};

// Update a service category by ID
exports.updateServiceCategory = async (req, res) => {
  try {
    const { serviceType, description } = req.body;
    const updatedCategory = await ServiceCategory.findByIdAndUpdate(
      req.params.id,
      { serviceType, description },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Service Category not found" });
    }
    res
      .status(200)
      .json({ message: "Service Category updated", data: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error updating service category", error });
  }
};

// Delete a service category by ID
exports.deleteServiceCategory = async (req, res) => {
  try {
    const deletedCategory = await ServiceCategory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCategory) {
      return res.status(404).json({ message: "Service Category not found" });
    }
    res.status(200).json({ message: "Service Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service category", error });
  }
};
