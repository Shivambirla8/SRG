
const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
