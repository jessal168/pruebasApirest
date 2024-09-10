const express = require("express");
const axios = require("axios");
const request = require('request');
const path = require("path");
const app = express();

app.use(express.json());
app.get("/", (req, res)=>{
    //res.send("hi Jesus");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, ()=>{
    console.log("server running  on port --> ", 3000);
});
