const users = require('../models/usersSchema.js');

const getAll = (req, res) => {
    console.log(req.url);
    users.find(function(err, users){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(users);
    })
};

const getByUserName = (req, res) => {
    const name = req.params.userName;
    users.find({ userName: name }, function(err, user){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(user);
    })
};

// validado
const newUser = (req, res) => {
    console.log(req.body);

    let user = new users(req.body);
    user.save(function(err){
        if(err) {
            res.status(500).send({ message: err.message });
        } else {
            res.status(201).send(user.toJSON());
        }
    });
};

const updateUserById = (req, res) => {
    const id = req.params.id;

    users.findById(id , (err, user) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!user) {
            res.status(404).send({ message: "Usuário não encontrado." });
        } else {
            users.findByIdAndUpdate( id , req.body , { new: true } , (err) => {
                res.status(200).send({ message: "Usuário atualizado com sucesso." });
            });
        }
    });
}

const deleteUserById = (req, res) => {
    const id = req.params.id;

    users.findById(id , (err, user) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!user) {
            res.status(404).send({ message: "Usuário não encontrado." });
        } else {
            users.findByIdAndDelete( id , (err) => {
                res.status(200).send({ message: "Usuário removido com sucesso." });
            });
        }
    });
}

module.exports = {
    getAll,
    getByUserName,
    newUser,
    updateUserById,
    deleteUserById
};