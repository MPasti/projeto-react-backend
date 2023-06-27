//essa const express é uma função que cria um servidor express
const express = require("express");
//e aqui criamos uma aplicação express
const app = express();

const port = 8000;

//o / é para mostrar a rota dele, isso quer dizer que tá na root, é o path daqui, do URL, /home /root /
app.get("/", (req, res) => {
  res.send("Olá, toma ta");
});
//req = request | res = response
//quando nosso serviço é chamado pelo cliente | e o responde é oq devolvemos a ela

//aqui é para falar para o app ficar ouvindo as mensagens recebidas na porta 8000
app.listen(port, () => {
  console.log(`escutando a porta ${port}`);
});
//esse chama quando iniciamos a porta, enquanto o outro é quando acessamos o servidor
