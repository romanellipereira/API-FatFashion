const app = require("./src/app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App está rodando na porta ${port}.`);
});