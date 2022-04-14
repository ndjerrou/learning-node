const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 30 },
  price: {
    type: Number,
    required: true,
    min: 5,
    max: [50, "We sell only used clothes"],
  },
  desc: String,
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
