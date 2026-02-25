const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({

    title:{
        type: String,
        requried: true,
    },
    description:{
        type: String,
        requried: true,
    },
      image: {
    filename: String,
    url: String,
      },
    price:{
        type: Number,
        requried: true,
    },
    Location: {
        type: String,
        requried: true,
    },
    country: {
        type: String,
        requried: true,
    }
})              

const listing = mongoose.model("listing",listingSchema);
module.exports= listing;