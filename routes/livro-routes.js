const express = require("express");
const { addLivro, getAllLivros } = require("../controllers/livroController");

const router = express.Router();

router.post("/livro", addLivro);
router.get("/livros", getAllLivros);

module.exports = {
  routes: router,
};
