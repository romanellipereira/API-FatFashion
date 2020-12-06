const express = require("express");
const router = express.Router();
const controller = require("../controllers/lojasController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/novaloja", controller.newLoja);


module.exports = router;