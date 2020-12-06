const lojas = require('../models/lojas.js');

const getAll = (req, res) => {
  console.log(req.url);
  lojas.find(function(err, lojas){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(lojas);
  })
};

module.exports = {
    getAll
  };