var mongoose = require("mongoose");
var Schema = require("./Schema");

var uri = "mongodb+srv://DbUserNF:<password>@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority"; //Mongo DB URI

mongoose.connect(uri, {useNewUrlParser: true}); //Connect

//var plantId =
var inSource = "https://www.google.co.uk/url?sa=i&source=images&cd=&ved=2ahUKEwjwuPL779vmAhVaAmMBHVi6AkkQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEchinopsis_pachanoi&psig=AOvVaw179v-4rjtOkY9C4TvFHSAv&ust=1577743831005418";
var inPlantName = "San Pedro"; 
var inLatinName = "Echinopsis Pachanoi";
var inType = "Cactus";
var inAvgLifespan = 80; //Years
var inWaterCycle = 2; //Weeks 
var inHardiness = "Hardy";
var inAvgHeight = 6; //Meters
var inAvgWidth = 1.8; //Meters
var inGrowthRate = 0.3; //Meters p/year 
var inClimate = "Arid";
var inOrigin = "Andes Mountains";
var inEdible = false;
var inFact = "For thousands of years this cactus' flesh has been boiled down to create a traditional Andean medicine as it contains mescaline; a chemical said to induce an 8-12 hour hallucinogenic high.";

var plantJSON = new Schema.plantSchema({
    source: inSource,
    plantName: inPlantName,
    latinName: inLatinName,
    type: inType,
    avgLifespan: inAvgLifespan,
    waterCycle: inWaterCycle,
    hardiness: inHardiness,
    avgHeight: inAvgHeight,
    avgWidth: inAvgWidth,
    growthRate: inGrowthRate,
    climate: inClimate,
    origin: inOrigin,
    edible: inEdible,
    fact: inFact
});

plantJSON.save();





