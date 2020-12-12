const express = require("express");
const router = express.Router();
const controller = require("../controllers/forumController.js");

router.get("/", controller.getAll);
router.get("/:title", controller.getPostByTitle);
router.post("/novo", controller.newPost); //validado
router.patch("/editar/:id", controller.updatePostById);
router.delete("/remover/:id", controller.deletePostById);

module.exports = router;