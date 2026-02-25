const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

require("dotenv").config();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Stock_Market");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("/listing/index.ejs", { allListings });
});

// app.get("/testlisting", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new Home",
//     description: "In the snow",
//     price: 1000000000,
//     location: "Austria"
//   });

//   await sampleListing.save();
//   console.log("Sample was saved");
//   res.send("successful testing");
// });

app.listen(port, () => {
  console.log("Server is running");
});