const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
  //para reduzir a quantdade de linhas na outra tela
}

function getTodosLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
  //para cada livro dentro da lista livros, quero fazer ma comparação
  //o [0], serve para acessar o primeiro elemento resultante do array gerado através do filter
  //uma vez que só trará de volta um unico valor nesse caso
  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

module.exports = {
  getTodosLivros,
  getTodosLivroPorId,
  insereLivro,
};
