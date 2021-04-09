// var AWS = require("aws-sdk");
// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000 ;
const hbs = require('hbs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://All_users_25:test@cluster0.mjn0g.mongodb.net/test?retryWrites=true&w=majority";

function database() {
    MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("parameters").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          value = result[0].value;
          value1 = result[1].value; 
          db.close();
        });
      });
  }

const app = express();

const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../views/partials")

app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/Dashboard", (req, res) =>{
    database();
    res.render("Dashboard", {
        p_value : value,
        p_value1 : value1,
    });
});

app.get("/warnings", (req, res) =>{
    res.render("warnings");
});

app.get("/navigation", (req, res) =>{
    res.render("navigation");
});

app.listen(port, () => {
    console.log(`listening to ${port}`);
  })