const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    base: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  options: {
    size: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    colors: {
      type: [String],
      default: [],
    },
    ruling: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
  },
  categories: {
    type: [String], // Array of strings for categories
    default: [],
  },
});

module.exports = mongoose.model("Product", productSchema);
