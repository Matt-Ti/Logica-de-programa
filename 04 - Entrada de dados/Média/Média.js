/*Programa que mostra a soma de todos os valores
e a média do total de todos os valores.
*/

var readlineSync = require("readline-sync");
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var total = 0;
var media = 0;

valor1 = parseFloat(readlineSync.question("valor 1: "))
valor2 = parseFloat(readlineSync.question("valor 2: "))
valor3 = parseFloat(readlineSync.question("valor 3: "))
valor4 = parseFloat(readlineSync.question("valor 4: "))
valor5 = parseFloat(readlineSync.question("valor 5: "))
total = valor1 + valor2 + valor3 + valor4 + valor5
media = total / 5
console.log("Total: " + total)
console.log("Média: "+ media);