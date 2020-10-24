const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    var lastName=req.body.lName;
    var firstName=req.body.fName;
    var email=req.body.Iemail;
    console.log(lastName, firstName,email);
});

app.listen("3000",function(req,res){
    console.log("Server is running on port 3000");
});