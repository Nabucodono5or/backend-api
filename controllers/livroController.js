const db = require("../db");
const Livro = require("../models/livro");

const createLivro = (doc) => {
  const livro = new Livro(
    doc.id,
    doc.data().titulo,
    doc.data().autor,
    doc.data().editora,
    parseInt(doc.data().paginas),
    parseFloat(doc.data().preco),
    doc.data().imagem
  );

  return livro;
};

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
        const livro = createLivro(doc);
        livros.push(livro);
      });

      res.send(livros);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLivro = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dados = await db.collection("livros").doc(id);
    const doc = await dados.get();

    if (!doc.exists) {
      res.status(404).send("Livro não encontrado!");
    } else {
      const livro = createLivro(doc);
      res.send(livro);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateLivro = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dados = req.body;
    const livro = db.collection("livros").doc(id);
    await livro.update(dados);
    res.send("Atualizado com sucesso!");
  
  } catch (error) {
    res.status(400).send(error.message);
  }

}

const deleteLivro = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("livros").doc(id).delete();
    res.send("Dado deletado com sucesso!");
  
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  addLivro,
  getAllLivros,
  getLivro,
  updateLivro,
  deleteLivro,
};
