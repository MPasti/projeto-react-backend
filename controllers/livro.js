const fs = require("fs");
const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  apagaLivro,
} = require("../services/livro");

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
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroInserido = insereLivro(req.body);
    res.status(201);
    res.send(livroInserido);
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

function patchLivro(req, res) {
  try {
    const livros = modificaLivro(req.params.id, req.body);
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}
function deletaLivro(req, res) {
  try {
    const idDeletado = deletaLivro(req.params.id);
    res.send({ idDeletado });
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deletaLivro,
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
