var Schema = require("./Schema");

async function getPlant(id) {
    return await Schema.Plant.findOne({"id": id}); //Search schema file with associated parameters
};

module.exports.getPlant = getPlant;