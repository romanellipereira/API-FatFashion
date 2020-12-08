const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: { type: Number },
    completeName: { type: String },
    email: { type: String },
    password: { type: String },
},{
    versionKey: false
});

const users = mongoose.model('users', usersSchema);
module.exports = users;