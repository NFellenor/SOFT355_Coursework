var Schema = require("./Schema");

async function getCard(id) {
    return await schemas.Plant.findOne({"id": id}); //Search schema file with associated parameters
}

module.exports.getPlant = getPlant;