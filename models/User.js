const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }, // instead of raw permissions
  permissions: [{ type: String }] // optional override or merged later
});

module.exports = mongoose.model("User", userSchema);
