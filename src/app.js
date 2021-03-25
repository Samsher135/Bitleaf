// var AWS = require("aws-sdk");
// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000 ;
// var MongoClient = require('mongodb').MongoClient;

const app = express();

const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs")

app.use(express.static(staticPath));

app.get("/", (req, res) =>{
    res.render("index");
});

app.listen(port, () => {
    console.log(`listening to ${port}`);
  })