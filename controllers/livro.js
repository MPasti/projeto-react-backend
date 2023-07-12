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

    if (id && Number(id)) {
      //Number(2) -> 2 | Number(batata) -> NaN (not a number)
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroInserido = insereLivro(req.body);
    if (req.body.nome) {
      res.status(201);
      res.send(livroInserido);
    } else {
      res.status(422);
      res.send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;

      const livros = modificaLivro(id, body);
      res.send(livros);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}
function deletaLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const idDeletado = apagaLivro(id);
      res.send({ idDeletado });
    } else {
      res.status(422);
      res.send("Id inválido");
    }
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
