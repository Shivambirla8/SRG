const express = require("express");
const router = express.Router();
const serviceBranchController = require("../controllers/serviceBranchController");

// Create a new Service Branch
router.post("/service-branches", serviceBranchController.createServiceBranch);

// Get all Service Branches
router.get("/service-branches", serviceBranchController.getAllServiceBranches);

// Get a single Service Branch by ID
router.get(
  "/service-branches/:id",
serviceBranchController.getServiceBranchById
);

// Update a Service Branch by ID
router.put(
  "/service-branches/:id",
  serviceBranchController.updateServiceBranch
);

// Delete a Service Branch by ID
router.delete(
  "/service-branches/:id",
  serviceBranchController.deleteServiceBranch
);

module.exports = router;
  
 




