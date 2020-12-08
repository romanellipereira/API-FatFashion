const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController.js");

router.get("/", controller.getAll);

module.exports = router;