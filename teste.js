const fs = require("fs");
//chama file system, uma ferramenta para manipular arquivos, escrever e ler

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = { id: "4", nome: "Punpun" };

//nessa função writeFileSync, passamos como parametro, o arquivo que vamos modificar e o elemento que será inserido
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]));
//o ...livrosAtuais, diz para pegarmos e adicionarmos nessa lista, tudo que temos no livros e adicionar em seguida
//o proximo parametro
// spread operator ([...])
//ele realmente manipula o arquivo, vai inserir lá mesmo

console.log(JSON.parse(fs.readFileSync("livros.json")));
