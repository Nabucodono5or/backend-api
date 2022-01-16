const express = require("express");
const { addLivro, getAllLivros, getLivro } = require("../controllers/livroController");

const router = express.Router();

router.post("/livro", addLivro);
router.get("/livros", getAllLivros);
router.get("/livro/:id", getLivro);


module.exports = {
  routes: router,
};
