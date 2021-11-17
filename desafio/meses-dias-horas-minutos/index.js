var readline = require("readline-sync");
var idade;
var meses;
var dias;
var horas;
var minutos;

idade = parseInt(readline.question("Informe sua idade: "));
5
meses = idade * 12;
dias = idade * 365;
horas = idade * 24 * 365;
minutos = idade * 60 * 365;
console.log(`voce tem ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos de nascido (a).`);

