const fs = require("fs");
//chama file system, uma ferramenta para manipular arquivos, escrever e ler

console.log(JSON.parse(fs.readFileSync("livros.json")));
