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
        type: String,
        default:"https://unsplash.com/photos/modern-house-with-wooden-deck-in-snowy-landscape-Wd8Nm8iXglQ",
        set:(v) => v ===""?"https://unsplash.com/photos/modern-house-with-wooden-deck-in-snowy-landscape-Wd8Nm8iXglQ" :v,
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