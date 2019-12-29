var mongoose = require("mongoose");
var schemas = require("./schemas");
var uri = "mongodb+srv://DbUserNF:<password>@soft355-dgfnc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true});
for (i=1; i<53; i++) {
var plant = new schemas.plant({"id": i,
"filename": i.toString() + ".png"});
.save();
}