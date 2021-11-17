var readline = require ("readline-sync");
var idade = 0;
var Anoatual = 0; 
var anoNascimento = 0;

Anoatual = parseInt(readline.question("Em que ano estamos? "));
anoNascimento = parseInt(readline.question("Em que ano voce nasceu? "));
idade = Anoatual - anoNascimento; 
console.log ("Mateus nasceu em " + anoNascimento + " e hoje em " + Anoatual + " tem " + idade + " anos de idade");



