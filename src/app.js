require('dotenv').config();

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Conexão com o banco de dados realizada com sucesso.")
})

const index = require("./routes/index");
const stores = require("./routes/storesRoute");
const users = require("./routes/usersRoute");
const forum = require("./routes/forumRoute");

app.use(bodyParser.json());

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
app.use("/lojas", stores);
app.use("/usuarios", users);
app.use("/forum", forum);

module.exports = app