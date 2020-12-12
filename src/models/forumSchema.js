const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    usuarioInclusao: { type: String },
    titulo: { type: String },
    texto: { type: String },
    comentarios: [
    {
        usuarioInclusaoComentario: { type: String },
        textoComentario: { type: String }
    }
    ]
},{
    versionKey: false
});

const forum = mongoose.model('forum', forumSchema);
module.exports = forum