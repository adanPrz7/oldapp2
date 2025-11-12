const {Schema, model} = require("mongoose");
const moment = require('moment-timezone');

const ParticipanteSchema = Schema({
    namePart: String,
    surname: String,
    email:String,
    phone:String,
    ticketCount:Number,
    ticketsAssigned:Number,
    ticketStart:Number,
    ticketEnd:Number,
    money:Schema.Types.Decimal128,
    qrCode:String,
    isValidate: Boolean,
    kindOfDate: String,
    origen: String,
    userRef:{
        type: Schema.ObjectId,
        ref: "User"
    },
    isFull: {
        type: Boolean,
        default: false
    },
    created_at:{
        type: Date,
        default: () => moment().tz('America/Mexico_City').toDate()
    }
});

module.exports = model("Participante", ParticipanteSchema,"participantes");