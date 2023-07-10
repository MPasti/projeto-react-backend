const fs = require("fs");
const {
  getTodosLivros,
  getTodosLivroPorId,
  insereLivro,
} = require("../services/livroServices");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  //req é o que o usuario enviou
  try {
    const id = req.params.id;
    const livro = getTodosLivroPorId(id);
    res.send(livro);
  } catch (error) {}
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
};

// function getLivros(req, res) {
//   try {
//     //esse throw new Error, faz com que um erro aconteça, assim o catch é emitido
//     throw new Error("teste");
//     res.send("Olá, toma ta");
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// }
