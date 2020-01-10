var Schema = require("./Schema");

async function getPlant(v) { //Asynchronous function 
    return await Schema.Plant.find(v); //Search Plant in schema file with no parameters, so return every plant.   
};

async function getUser(userNameInp) {
    return await Schema.User.findOne({"userNameInp": userNameInp}); //Search User in schema file with associated parameters.
};

module.exports.getPlant = getPlant;
module.exports.getUser = getUser;