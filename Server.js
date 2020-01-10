var express = require("express");
var mongoose = require("mongoose");
var db = require("./db.js");
var schema = require("./Schema.js");

var app = express();
var uri = "mongodb+srv://DbUserNF:MSDOSislife50@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority"; //Mongo DB URI

mongoose.Promise = global.Promise; //Used in attempt to fix timeout inducing error

var listener = app.listen('9000', function(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
    console.log("Listening on 9000");
    });
});

app.use(express("resources"));

app.get("/plant", function(request, response){ //GET from db
    db.getPlant(request.body._id).then(function(Plant) {
        response.send(Plant); //Send to whatever uses this API route 
        console.log("GET Plant finished");
    });
});

//take userName and password input and input into variables 
app.post("/login"), function(request, response){
    var userNameInp = request.body.usernameVal; //Take value from username input box in login html assign to userNameInp
    var passwordInp = request.body.password; //Take value from password input box in login html assign to passwordInp
    db.getUser(userNameInp).then(function(User){
        if (userNameInp == User.username && passwordInp == User.password) {
        response.redirect(Landing_Page.html); //Redirect to landing page if username and password match a users attributes on the database
        }
    }) 
}

module.exports.listener = listener; //Export listener for testing
