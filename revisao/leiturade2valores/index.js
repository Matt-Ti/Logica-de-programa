var readline = require("readline-sync");
valor1 = 0;
valor2 = 0;

console.log("Programa que calcula o maior valor");
valor1 = parseInt(readline.question("Digite o primeiro valor: "));
valor2 = parseInt(readline.question("Digite o segundo valor: "));

if(valor1 > valor2){
    console.log("O primeiro valor digitado que contem " + valor1 + " é o maior valor");
}else{
    console.log("O segundo valor digitado que contem " + valor2 + " é o maior valor");
}