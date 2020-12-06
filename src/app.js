const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/fatfashion", {
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
    )
    next()
  })

app.use("/", index);
app.use("/lojas", lojas);

module.exports = app