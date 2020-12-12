const users = require('../models/usersSchema.js');

const getAll = (req, res) => {
    console.log(req.url);
    users.find(function(err, users){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(users);
    });
};

const getByUserName = (req, res) => {
    const name = req.params.userName;

    users.find({ nomeUsuario: name }, { _id: 0 }, (err, user) => {
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(user);
    });
};

const newUser = (req, res) => {
    console.log(req.body);

    let user = new users(req.body);
    user.save(function(err){
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send(user.toJSON());
        };
    });
};

const updateUserByUserName = (req, res) => {
    const userName = req.params.userName
    users.updateMany({ nomeUsuario: userName }, { $set : req.body }, { upsert : true }, (err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Usuário atualizado com sucesso."})
        };
    });
};

const deleteUserByUserName = (req, res) => {
    const userName = req.params.userName
    users.deleteMany({ nomeUsuario: userName }, (err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Usuário removido com sucesso."})
        };
    });
};

module.exports = {
    getAll,
    getByUserName,
    newUser,
    updateUserByUserName,
    deleteUserByUserName
};