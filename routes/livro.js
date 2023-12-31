//importando o router do express, para criar as rotas

const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deletaLivro,
} = require("../controllers/livro");

//criamos uma variável que resulta essa função de rotas
const router = Router();
//o router tem a função de reagir a determinada ação HTTP em determnado patch

//aqui é o método http para acessar o site
//o / é para mostrar a rota dele, isso quer dizer que tá na root, é o path daqui, do URL, /home /root /
// colocando apenas / ele vai dar uma resposta na página root
// caso coloque /home, ele vai dar uma resposta ao acessar o localhost:8000/home e se entrar no / n vai dar get
router.get("/", getLivros);
//req = request | res = response
//quando nosso serviço é chamado pelo cliente | e o responde é oq devolvemos a ela

router.get("/:id", getLivro);
//o : significa que vai receber uma variável

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deletaLivro);

//nisso vamos exportar esse router para os outros arquivos usarem ele
//tipo quando exportamos um objeto no front
module.exports = router;
