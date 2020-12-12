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
    stores.findById( id , (err, store) => {
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(store);
    })
};

const getByStoreSName = (req, res) => {
    const storeSName = req.params.storeSName;
    stores.find( { nomeLoja: storeSName } , (err, store) => {
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
        } else {
            res.status(201).send(store.toJSON());
        }
    });
};

const updateStoreById = (req, res) => {
    const id = req.params.id;

    stores.findByIdAndUpdate( id , (err, store) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!store) {
            res.status(404).send({ message: "Loja não encontrada." });
        } else {
            res.status(200).send({ message: "Loja atualizada com sucesso." });
        }
    });
};

// const updateAdressById = (req, res) => {
//     const id = req.params.id
//     stores.updateMany({ id } , { endereco: req.body }, { upsert : true }, (err) => {
//         if (err) {
//             res.status(500).send({ message: err.message })
//         } else {
//             res.status(200).send({ message : "curso atualizado com sucesso"})
//         }
//     })
// }

const deleteStoreById = (req, res) => {
    const id = req.params.id;

    stores.findByIdAndDelete( id , (err, store) => {
        if (err) {
            res.status(500).send({ message: err.message });
        } else if (!store) {
            res.status(404).send({ message: "Loja não encontrada." });
        } else {
            res.status(200).send({ message: "Loja removida com sucesso." });
        }
    });
};

module.exports = {
    getAll,
    getStoreById,
    getByStoreSName,
    newStore,
    updateStoreById,
    // updateAdressById,
    deleteStoreById,
};