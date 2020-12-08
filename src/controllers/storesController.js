const stores = require('../models/storesSchema.js');

const getAll = (req, res) => {
    stores.find(function(err, stores){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(stores);
    })
};

const getStoreById = (req, res) => {
    const id = req.params.id;
    stores.find({ id }, function(err, store){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(store);
    })
};

const newStore = (req, res) => {
    console.log(req.body);
    let store = new stores(req.body);

    store.save(function(err){
        if(err) {
        res.status(500).send({ message: err.message });
        };
        res.status(201).send(store.toJSON());
    });
};

const updateStoreById = (req, res) => {
    const id = req.params.id;

    stores.updateMany({ id }, { $set : req.body}, err => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Dados da loja atualizados com sucesso."});
    });
};

const deleteStoreById = (req, res) => {
    const id = req.params.id;

    stores.find({ id }, (err, store) => {
        if(store.length > 0) {
            stores.deleteMany({ id }, function(err){
                if(err) {
                    res.status(500).send({ message: err.message });
                };
                res.status(200).send({ message: "Loja excluída com sucesso." });
            });
        }else {
            res.status(200).send({ message: "Loja não encontrada." });
        };
    });
};

module.exports = {
    getAll,
    getStoreById,
    newStore,
    updateStoreById,
    deleteStoreById
};