var readline = require("readline-sync");
var valor = 0;
var total = 0;

valor = parseInt(readline.question("informe um numero valor: "));

while(valor != 0){
    valor = parseInt(readline.question("informe um numero valor: "))
    total = total + valor
}

console.log("valor total: "+ total);