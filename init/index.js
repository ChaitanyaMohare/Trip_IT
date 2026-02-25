const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

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
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

const start = async () => {
  await connectDB();   
  await initDB();      
  mongoose.connection.close();
};

start();