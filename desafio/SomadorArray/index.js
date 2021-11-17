var readline = require("readline-sync");
var numeros = new Array();
var numero;
var soma = 0;

for(var i = 0; i < 10; i++){
    numero = parseInt(readline.question("informe um numero valor:"));
        numeros.push(numero);
}

for(var i = 0; i < 10; i++){
    soma += numeros[i];
}
console.log("soma = " + soma);