const express = require("express");
const router = express.Router();
const controller = require("../controllers/forumController.js");

router.get("/", controller.getAll); //validado
router.get("/:title", controller.getPostByTitle); //validado
router.post("/novo", controller.newPost); //validado
router.patch("/editar/id/:id", controller.updatePostById); //validado
router.patch("/:id/responder", controller.postComment);
router.delete("/remover/id/:id", controller.deletePostById); //validado

module.exports = router;