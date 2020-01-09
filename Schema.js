//Schema
var mongoose = require("mongoose");

var User = mongoose.model("User", { //User model and attributes
   // userId: Number,
    userName: String,
    password: String,
    notes: [String],
});

var Plant = mongoose.model("Plant", { //Plant model and attributes
    source: String,
    plantName: String,
    latinName: String,
    type: String,
    lifespan: Number,
    waterCycle: Number,
    hardiness: String,
    height: Number,
    width: Number,
    growthRate: Number,
    climate: String,
    origin: String,
    edible: Boolean,
    fact: String,    
});

var List = mongoose.model("List", { //List model and attributes
    plantId: Number,
    userId: Number,
    listId: Number,
    listName: String,
    listValues: [String],
});

module.exports.User = userSchema; //Export to be used as userSchema import
module.exports.Plant = plantSchema;
module.exports.List = listSchema;