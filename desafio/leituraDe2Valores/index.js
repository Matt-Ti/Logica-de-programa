var readline = require("readline-sync");
var valor1 = 0;
var valor2 = 0;

console.log("Programa de Leitura de valores maiores: ");
valor1 = parseInt(readline.question("informe o valor 1: "));
valor2 = parseInt(readline.question("informe o valor 2: "));

if(valor1 > valor2){
    console.log("O primeiro valor informado que contem a numeração " + valor1 + " é o maior valor.");
}else {
    console.log("O segundo valor informado que contem a numeração " + valor2 + " é o maior valor.");
}