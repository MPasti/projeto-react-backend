//essa const express é uma função que cria um servidor express
const express = require("express");
//e aqui criamos uma aplicação express
const rotaLivro = require("./routes/livro");

const app = express();
app.use(express.json);
//precisamos disso para aceitar requisições de bodys tipo json

//nisso podemos acessar a rota criada no livro.js através do /livros
app.use("/livros", rotaLivro);

const port = 8000;

//aqui é para falar para o app ficar ouvindo as mensagens recebidas na porta 8000
app.listen(port, () => {
  console.log(`escutando a porta ${port}`);
});
//esse chama quando iniciamos a porta, enquanto o outro é quando acessamos o servidor
