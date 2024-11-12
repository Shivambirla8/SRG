const express = require("express");
const router = express.Router();
const serviceCategoryController = require("../controllers/serviceCategoryController");

// Create
router.post(
  "/service-category",
  serviceCategoryController.createServiceCategory
);

// Read all
router.get(
  "/service-categories",
  serviceCategoryController.getAllServiceCategories
);

// Read one by ID
router.get(
  "/service-category/:id",
  serviceCategoryController.getServiceCategoryById
);

// Update
router.put(
  "/service-category/:id",
  serviceCategoryController.updateServiceCategory
);

// Delete
router.delete(
  "/service-category/:id",
  serviceCategoryController.deleteServiceCategory
);

module.exports = router;

