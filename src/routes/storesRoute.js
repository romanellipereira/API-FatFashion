const express = require("express");
const router = express.Router();
const controller = require("../controllers/storesController");

router.get("/", controller.getAll);
router.get("/:id", controller.getStoreById);
router.post("/novaloja", controller.newStore);
router.patch("/editarloja/:id", controller.updateStoreById);
router.delete("/excluirloja/:id", controller.deleteStoreById);

module.exports = router;