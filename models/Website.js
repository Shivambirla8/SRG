// models/Website.js
const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Website", websiteSchema);
