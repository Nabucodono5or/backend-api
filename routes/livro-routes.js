const express = require("express");
const {
  addLivro,
  getAllLivros,
  getLivro,
  updateLivro,
  deleteLivro,
} = require("../controllers/livroController");

const router = express.Router();

router.post("/livro", addLivro);
router.get("/livros", getAllLivros);
router.get("/livro/:id", getLivro);
router.put("/livro/update/:id", updateLivro);
router.delete("/livro/rm/:id", deleteLivro);

module.exports = {
  routes: router,
};
