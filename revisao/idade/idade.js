var readline = require("readline-sync");
var idade = 0;
var anoNascimento = 0;
var Anoatual = 0;
var nome = "";

nome = readline.question("Qual seu nome: ");
Anoatual = parseFloat(readline.question("Digite em que ano estamos: "));
anoNascimento = parseFloat(readline.question("Digite o ano que voce nasceu: "));
idade = Anoatual - anoNascimento;
console.log(nome + " voce nasceu em " + anoNascimento + " e hoje em " + Anoatual + " voce tem " + idade + " anos de idade");