const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

app.get("/",(req,res) =>{
    res.send("Server is Working")
})

app.listen(port,() => {
    console.log("Server is running")
});