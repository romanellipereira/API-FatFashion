const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
    nomeLoja: { type: String , required: true },
    endereco: [
        {
            _id: 0,
            estado: { type: String },
            cidade: { type: String },
            bairro: { type: String },
            logradouro: { type: String },
            numero: { type: Number },
            complemento: { type: String },
            cep: { type: String }
        }
    ],
    website: { type: String },
    redeSocial: { type: String },
    telefone: { type: String },
    whatsapp: { type: String },
    vendeOnline: { type: Boolean , required: true },
    confeccaoPropria: { type: Boolean },
    tamanhos: { type: Array , default: [] },
    estilo: { type: Array , default: [] },
    genero: { type: Array , default: [] },
    atacadoOuVarejo: { type: String }
},{
    versionKey: false
});

const stores = mongoose.model('stores', storesSchema);
module.exports = stores