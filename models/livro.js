class Livro {
  constructor(id, titulo, autor, editora, paginas, preco, imagem) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.paginas = paginas;
    this.preco = preco;
    this.imagem = imagem;
  }
}

module.exports = Livro;
