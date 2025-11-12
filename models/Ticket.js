const {Schema, model} = require("mongoose");
const moment = require('moment-timezone');

const TicketSchema = Schema({
    money: {
        type: Schema.Types.Decimal128,
        require: true
    },
    dateBuy: {
        type: Date,
        require: true
    },
    category:{
        type: Number,
        require: true
    },
    store:{
        type: String,
        require: true
    },
    origin:{
        type:String,
        require:true
    },
    kindOfDate: String,
    dateRegister:{
        type: Date,
        default: () => moment().tz('America/Mexico_City').toDate()
    },
    parti:{
        type: Schema.ObjectId,
        ref: "Participante"
    }
});

module.exports = model("Ticket", TicketSchema,"tickets");