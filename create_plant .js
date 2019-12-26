var mongoose = require("mongoose");
var Schema = require("./Schema");

var uri = "mongodb+srv://DbUserNF:<password>@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority"; //Mongo DB URI

mongoose.connect(uri, {useNewUrlParser: true}); //Connect

//var plantId =
//var filename =
var plantName = "San Pedro"; 
var latinName = "Echinopsis Pachanoi";
var type = "Cactus";
var avgLifespan = 80; //Years
var family = "Echinopsis";
var waterCycle = 2; //Weeks 
var hardiness = "Hardy";
var avgHeight = 6; //Meters
var avgWidth = 1.8; //Meters
var growthRate = 0.3; //Meters p/year 
var climate = "Arid";
var origin = "Andes Mountains";
var edbile = false;
var fact = "For thousands of years this cactus' flesh has been boiled down to create a traditional Andean medicine as it contains mescaline; a chemical said to induce an 8-12 hour hallucinogenic high.";

var Plant = mongoose.model("Plant", { //Plant model and attributes
    plantId: Number, 
    filename: String,
    plantName: String,
    latinName: String,
    type: String,
    family: String,
    lifespan: Number,
    waterCycle: Number,
    hardiness: String,   
    height: Number,
    width: Number,
    growthRate = Number,
    climate: String,
    origin: String,
    edible: Boolean, 
    fact: String
});

