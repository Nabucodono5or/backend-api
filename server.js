const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const livroRoutes = require("./routes/livro-routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", livroRoutes.routes);

app.listen(3000, () => console.log("Servidor iniciado!"));