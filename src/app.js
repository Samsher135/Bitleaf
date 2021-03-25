// var AWS = require("aws-sdk");
// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000 ;
const hbs = require('hbs');
// var MongoClient = require('mongodb').MongoClient;

const app = express();

const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../views/partials")

app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/Login", (req, res) =>{
    res.render("Login");
});

app.listen(port, () => {
    console.log(`listening to ${port}`);
  })