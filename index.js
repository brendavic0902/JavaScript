import entradaDados from "readline-sync";

//let nome = entradaDados.question("Informe seu nome: ");
//console.log(`Olá, ${nome}!`);

let x = entradaDados.questionInt("X: ");
let y = entradaDados.questionInt("Y: ");
let total = Number(x) + Number(y);
console.log(`Total: ${x+y}`);
