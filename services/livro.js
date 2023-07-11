const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
  //para reduzir a quantdade de linhas na outra tela
}

function getLivroPorId(id) {
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

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
  //livrosAtuais[indiceModificado] -> {id:'2', nome: 'evangelion'} exemplo
  //modificacoes -> {nome: "neon genesis evangelion"}
  //ele vai ver se já existe esse nome, se não tiver ele vai modificar, vai substituir o campo
  //sem substituir todo o objeto

  livrosAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}
function apagaLivro(id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const livrosFiltrados = livrosAtuais.filter((livro) => livro.id !== id);

  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  apagaLivro,
};
