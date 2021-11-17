var readline = require("readline-sync");
//variavéis de entrada.
var nome = "";
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var total_de_aulas = 0;
var total_de_faltas = 0;
//variavéis para armazenar os calculos.
var media = 0;
var porcentual_de_faltas = 0;

//Entrada de dados
console.log("Programa que calcula a media de um aluno");
nome = readline.question("Qual seu nome?: ");
n1 = parseFloat(readline.question("informe a 1 nota: "));
n2 = parseFloat(readline.question("informe a 2 nota: "));
n3 = parseFloat(readline.question("informe a 3 nota: "));
n4 = parseFloat(readline.question("informe a 4 nota: "));
total_de_aulas = parseInt(readline.question("informe a quantidade de aulas do curso: "));
total_de_faltas = parseInt(readline.question("Informe o total de faltas: "));
media = (n1+n2+n3+n4) / 4;
console.log(nome + " sua media é " + media);
porcentual_de_faltas = (total_de_faltas * 100) / total_de_aulas;
console.log(nome + " e o seu porcentual de faltas é " + porcentual_de_faltas);

if((media >= 6) && porcentual_de_faltas <= 25){
    console.log("parabéns!! você foi aprovado");
}else{
    console.log("Que pena!! você não foi aprovado");
}