const db = require("../db");
const Livro = require("../models/livro");

const addLivro = async (req, res, next) => {
  try {
    const dados = req.body;
    const docRef = db.collection("livros").doc();
    await docRef.set(dados);
    res.send("Dados salvos com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllLivros = async (req, res, next) => {
  try {
    const docRef = db.collection("livros");
    const dados = await docRef.get();
    const livros = [];

    if (dados.empty) {

      res.status(404).send("Nenhuma livro encontrado!");
    } else {
      
      dados.forEach((doc) => {
        const livro = new Livro(
          doc.id,
          doc.data().titulo,
          doc.data().editora,
          parseInt(doc.data().paginas),
          parseFloat(doc.data().preco),
          doc.data().imagem
        );

        console.log(doc.data());
        livros.push(livro);
      });

      res.send(livros);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addLivro,
  getAllLivros,
};
