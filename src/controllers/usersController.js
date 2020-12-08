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


module.exports = {
    getAll
};