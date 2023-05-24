const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

router.route("/register").post(async (req, res) => {
  try {
    const {
      fname,
      lname,
      hashedAndSaltedPassword,
      emailVerified,
      address,
      shippingAddress,
    } = req.body;

    // Create a new user object using the User model
    const user = new User({
      fname,
      lname,
      hashedAndSaltedPassword,
      emailVerified,
      address,
      shippingAddress,
    });

    console.log(user);
    // Save the user to the MongoDB database
    const savedUser = await user.save();

    // Return the saved user object as the response
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.route("/details/:id").get(async (req, res) => {
  let id = req.params.id;
  try {
    var detail = await User.findById({ _id: id }).lean();
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Server error" });
  }
  console.log(detail);
  res.json(detail);
});

module.exports = router;
