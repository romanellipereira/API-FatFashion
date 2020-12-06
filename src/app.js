const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Conexão realizada com sucesso.")
})

const index = require("./routes/index");
const lojas = require("./routes/lojasRoute");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    console.info('Nova requisição realizada.');
    next()
  })

app.use("/", index);
app.use("/lojas", lojas);

module.exports = app