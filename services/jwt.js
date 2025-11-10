//Importat dependencias
const jwt = require("jwt-simple");
const moment = require("moment");

//
const secret = "R7wXp9Qz_L4mN1oA2bC3dE5fG_6hI8jK0sTuVwXyZaBc_DeFgHiJkLmNoPqRsTvU";

//Crear una funcion para generar tokens
const createToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(1, "days").unix()
    };
    //Devolver jwt token codificado
    return jwt.encode(payload, secret);
}

module.exports = {
    secret,
    createToken
}