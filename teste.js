const fs = require("fs");
//chama file system, uma ferramenta para manipular arquivos, escrever e ler

const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoLivro = { id: "3", nome: "One Piece" };

//nessa função writeFileSync, passamos como parametro, o arquivo que vamos modificar e o elemento que será inserido
fs.writeFileSync("livros.json", JSON.stringify([...livrosAtuais, novoLivro]));
//o ...livrosAtuais, diz para pegarmos e adicionarmos nessa lista, tudo que temos no livros e adicionar em seguida
//o proximo parametro
// spread operator ([...])
//ele realmente manipula o arquivo, vai inserir lá mesmo

console.log(JSON.parse(fs.readFileSync("livros.json")));
