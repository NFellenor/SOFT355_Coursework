var express = require("express");
var mongoose = require("mongoose");
var db = require("./db");

var uri = "mongodb+srv://DbUserNF:<password>@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority"; //Mongo DB URI

var app = express();

app.listen('9000', function(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then((test) => {
    console.log("Connected to DB");
});

app.use(express.static("resources"));

app.get("/card/:id", function(request, response) { //Edit
    db.getCard(request.params.id).then(function(card) {
        response.redirect("/" + card.filename);
    });
});

app.get("/newgame", function(request, response) { //Edit 
    logic.newGame().then(function(game) {
        console.log("created a new game: " + game._id);
        response.contentType("application/json");
        response.send({"gameId": game._id});
    });
})

    // Some output for the interested reader...
    console.log("Listening on 9000");
})