// models/accountHeadModel.js
// const mongoose = require("mongoose");

// const accountHeadSchema = new mongoose.Schema({
//   accountHead: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("AccountHead", accountHeadSchema);

const mongoose = require("mongoose");

const accountHeadSchema = new mongoose.Schema({
  accountHead: {
    type: String,
    required: true,
    unique: true, // Add this line to enforce uniqueness
  },
});

module.exports = mongoose.model("AccountHead", accountHeadSchema);
