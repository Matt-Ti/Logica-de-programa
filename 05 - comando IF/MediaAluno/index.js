var readline = require("readline-sync");
var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media = 0;

//Entrada de dados
console.log("Programa que calcula a media de um aluno");
nome = readline.question("Qual seu nome?: ");
n1 = parseFloat(readline.question("informe a 1 nota: "));
n2 = parseFloat(readline.question("informe a 2 nota: "));
n3 = parseFloat(readline.question("informe a 3 nota: "));
n4 = parseFloat(readline.question("informe a 4 nota: "));

media = (n1+n2+n3+n4) / 4;
console.log("Media: " + media);

if(media < 6){
    console.log(nome + " Voce foi reprovado \ntente novamente.");
}else{
    console.log(nome + " Voce foi aprovado \nParabens!");
}

/*if(media >= 6){
    console.log(nome + " Voce foi aprovado \nParabens!");
}*/
