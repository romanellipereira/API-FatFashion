const express = require("express");
const router = express.Router();
const controller = require("../controllers/storesController");

router.get("/", controller.getAll); //validado
router.get("/id/:id", controller.getStoreById); //validado
router.get("/:storeSName", controller.getByStoreSName); //validado
router.get("/estado/:state", controller.getByState); //validado
router.get("/cidade/:city", controller.getByCity); //validado
router.get("/bairro/:district", controller.getByDistrict); //validado
router.post("/nova", controller.newStore); //validado
router.patch("/atualizar/id/:id", controller.updateStoreById); //validado
router.patch("/atualizar/:id/endereco", controller.updateAdressById);
router.delete("/remover/id/:id", controller.deleteStoreById); //validado

module.exports = router;