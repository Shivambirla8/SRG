const mongoose = require("mongoose");

const ServiceBranchSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
  serviceType: {
    type: String,
    enum: ["Online", "Offline"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ServiceBranch", ServiceBranchSchema);






