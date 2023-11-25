const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

// All Schema
const User = require("./Models/userModel");

app.use(cors());
app.use(express.json());

// Connect to Mongo DB
try {
  mongoose.connect(process.env.MONGO_DB);
  console.log("Successfully connected");
} catch (e) {
  console.log("Error: ", e);
}

app.get("/", (req, res) => {
  res.send("Hello World");s
});

app.use("/user", require("./Routers/user-router"));
app.use("/products", require("./Routers/product-router"));

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT + " Is running");
});
