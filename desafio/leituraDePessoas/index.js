var readline = require("readline-sync");
var ano_atual = 0;
var ano_nasc = 0;
var idade = 0;
var nome = "";

console.log("Programa de verificação de idade para está apto a votar");
nome = readline.question("Informe o seu nome: ");
ano_atual = parseInt(readline.question("informe o ano atual que estamos: "));
ano_nasc = parseInt(readline.question("informe o ano que voce nasceu: "));
idade = ano_atual - ano_nasc

if(idade >= 16){
    console.log(nome + " você completara esse ano de " + ano_atual + ", " + idade + " anos e estará apto a votar");
}else{
    console.log(nome + " você completara esse ano de " + ano_atual + ", " + idade + " anos e não estará apto a votar");
}