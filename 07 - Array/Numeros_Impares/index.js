var readline = require("readline-sync");
var numeros = new Array();
var n = 10

while(n != 0){
    console.log("Leitura de numeros... Impares");
    console.log("Digite o valor zero (0) para sair");
    n = parseFloat(readline.question("Informe o valor: "));
    if((n != 0) && (n%2 == 1)){
        numeros.push(n)
    }
}
console.log("Valores inseridos no array: " + numeros);