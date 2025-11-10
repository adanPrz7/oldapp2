const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const check = require("../middlewares/auth");


//Definir rutas
router.get("/prueba-usuario", UserController.pruebaUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/getPerfil", check.auth, UserController.profile);
router.post("/UpdateP", check.auth, UserController.UpdateP);

//Exportar el router
module.exports = router;