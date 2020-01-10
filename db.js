var Schema = require("./Schema");

async function getPlant(v) { //Asynchronous function 
    return await Schema.Plant.find(v); //Return all plant object attributes and documents from database using plant definition from schema.  
};

async function getUser(userNameInp) {
    return await Schema.User.findOne({"userNameInp": userNameInp}); //Search User in schema file with associated parameters.
};

module.exports.getPlant = getPlant;
module.exports.getUser = getUser;