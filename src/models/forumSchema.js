const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    usuarioInclusao: { type: String , required: true },
    titulo: { type: String , required: true },
    texto: { type: String , required: true },
    comentarios: [
    {
        usuarioInclusaoComentario: { type: String , required: true },
        textoComentario: { type: String , required: true },
    }
    ]
},{
    versionKey: false
});

const forum = mongoose.model('forum', forumSchema);
module.exports = forum