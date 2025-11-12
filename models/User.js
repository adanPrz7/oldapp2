const {Schema, model} = require("mongoose");
const { default: isEmail } = require("validator/lib/isEmail");
const moment = require('moment-timezone');

const UserSchema = Schema({
    nameUser: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    },
    created_at:{
        type: Date,
        default: () => moment().tz('America/Mexico_City').toDate()
    }
});

module.exports = model("User", UserSchema,"users");