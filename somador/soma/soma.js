//somando dois números
var readlineSync = require("readline-sync");
var valorA = 0;
var valorB = 0;
var nome = 0;
var total = 0;

console.log ("Somador de dois números");
nome = parseFloat(readlineSync.question("Qual seu nome? "));
valorA = parseFloat(readlineSync.question("Digite um numero: "));
valorB = parseFloat(readlineSync.question("Digite o proximo valor: "));
total = valorA + valorB
console.log(nome + "O resultado da soma foi: " + total)