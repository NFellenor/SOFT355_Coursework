var express = require("express");
var mongoose = require("mongoose");
var db = require("./db.js");
var schema = require("./Schema.js");

var app = express();
var uri = "mongodb+srv://DbUserNF:MSDOSislife50@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority"; //Mongo DB URI

mongoose.Promise = global.Promise;

var listener = app.listen('9000', function(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
    console.log("Listening on 9000");
    });
});

app.use(express("resources"));

app.get("/plant", function(request, response){
    db.getPlant(request.body._id).then(function(plant) {
        response.send(plant);
        console.log("GET Plant finished");
    });
});

//take userName and password input and input into variables 
app.get("/login"), function(request, response){
    var userNameInp = request.body.username;
    var passwordInp = request.body.password;
}

app.get("/user", function(request, response){
    db.getUser(request.body._id).then(function(plant) {
        response.send();
        console.log("GET Plant finished");
    });
});

app.post
module.exports.listener = listener; //Export listener for testing

//google ajax and jquery to get onto html page
//api endpoint to pass data from server to client 

//create json user object, takes input of username and password, IF input = object.username & password = 