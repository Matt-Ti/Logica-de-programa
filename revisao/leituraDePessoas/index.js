var readline = require("readline-sync");
var nome = "";
var ano_atual = 0;
var ano_nasc = 0;
var idade = 0;

console.log("=====================================\n Verificador de se está apto a votar\n=====================================");
nome = readline.question("Digite o seu nome: ");
ano_atual = parseInt(readline.question("Digite o ano atual: "));
ano_nasc = parseInt(readline.question("Digite o ano em que voce nasceu: "));
idade = ano_atual - ano_nasc;

if(idade >= 16){
    console.log(nome + " voce esta apto a votar");
}else{
    console.log(nome + "voce nao esta apto a votar");
}