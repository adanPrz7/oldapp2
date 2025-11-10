const {Schema, model} = require("mongoose");

const ContadorSchema = Schema({
    identityC:{
        type: String,
        default: "67350351eae6c4d5810d546d"
    },
    kindOfDate: String,
    listCount:Number
});

module.exports = model("Contador", ContadorSchema,"contadores");