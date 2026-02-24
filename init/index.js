const mongoose = require("mongoose");
const data = require("./data.js");
const listing = require("../models/listing.js");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Stock_Market");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const initDB = async () => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();