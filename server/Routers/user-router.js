const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

router.route("/register").post(async (req, res) => {
  try {
    const {
      fname,
      lname,
      email,
      hashedAndSaltedPassword,
      emailVerified,
      address,
      shippingAddress,
    } = req.body;

    // Create a new user object using the User model
    const user = new User({
      fname,
      lname,
      email,
      hashedAndSaltedPassword,
      emailVerified,
      address,
      shippingAddress,
    });

    console.log(user);
    // Save the user to the MongoDB database
    const savedUser = await user.save();

    // Return the saved user object as the response
    res.status(201).json({ user: savedUser, message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });

    if (!user) {
      // If the user is not found, return an error response
      console.log("Invalid");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the provided password matches the hashed and salted password in the database
    // const isPasswordValid = user.comparePassword(password);

    if (user.hashedAndSaltedPassword != password) {
      // If the password is invalid, return an error response
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Password is valid, login successful
    res.json({ user: user._id, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.route("/details/:id").get(async (req, res) => {
  let id = req.params.id;
  try {
    var user = await User.findById({ _id: id }).lean();
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Server error" });
  }
  console.log(user);
  res.json({ user });
});

module.exports = router;
