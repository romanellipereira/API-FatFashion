const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    nomeCompleto: { type: String , required: true},
    nomeUsuario: { type: String , unique: true , required: true},
    email: { type: String , unique: true , required: true},
},{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);
module.exports = users