const express = require("express");
const router = express.Router();
const controller = require("../controllers/storesController");

router.get("/", controller.getAll); //validado
router.get("/id/:id", controller.getStoreById); //validado
router.get("/:storeSName", controller.getByStoreSName); //validado
router.post("/nova", controller.newStore); //validado
router.patch("/atualizar/:id", controller.updateStoreById); //validado
router.delete("/remover/:id", controller.deleteStoreById); //validado

module.exports = router;