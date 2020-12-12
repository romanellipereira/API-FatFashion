const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController.js");

router.get("/", controller.getAll);
router.get("/:userName", controller.getByUserName);
router.post("/novo", controller.newUser); //validado
router.patch("/atualizar/:id", controller.updateUserById);
router.delete("/remover/:id", controller.deleteUserById);

module.exports = router;