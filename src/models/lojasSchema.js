const mongoose = require('mongoose');

const lojasSchema = new mongoose.Schema({
    id: { type: Number },
    marca: { type: String },
    estado: { type: String },
    cidade: { type: String },
    bairro: { type: String },
    endereco: { type: String },
    cep: { type: String },
    redeSocial: { type: String },
    telefone: { type: String },
    whatsapp: { type: String },
    vendeOnline: { type: Boolean },
    confeccaoPropria: { type: Boolean },
    tamanhos: { type: String },
    estilo: { type: String },
    atacadoOuVarejo: { type: String }
},{
    versionKey: false
});

const lojas = mongoose.model('lojas', lojasSchema);
module.exports = lojas;