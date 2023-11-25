const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  street1: {
    type: String,
    required: true,
  },
  street2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashedAndSaltedPassword: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  shippingAddress: {
    type: addressSchema,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
