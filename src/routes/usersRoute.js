const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController.js");

router.get("/", controller.getAll); //validado
router.get("/:userName", controller.getByUserName); //validado
router.post("/novo", controller.newUser); //validado
router.patch("/atualizar/:userName", controller.updateUserByUserName); //validado
router.delete("/remover/:userName", controller.deleteUserByUserName); //validado

module.exports = router;