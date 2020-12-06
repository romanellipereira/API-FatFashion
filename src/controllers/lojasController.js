const lojas = require('../models/lojasSchema.js');

const getAll = (req, res) => {
  console.log(req.url);
  lojas.find(function(err, lojas){
    if(err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(lojas);
  })
};

const getById = (req, res) => {
    const id = req.params.id;
    lojas.find({ id }, function(err, lojas){
        if(err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(lojas);
    })
};

const newLoja = (req, res) => {
    console.log(req.body);
    let loja = new lojas(req.body);

    loja.save(function(err){
        if(err) {
        res.status(500).send({ message: err.message });
        };
        res.status(201).send(loja.toJSON());
    });
};

module.exports = {
    getAll,
    getById,
    newLoja
};