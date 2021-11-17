var readline = require("readline-sync");
var nome;
var mais_novo;
var mais_velho;
var idade = 0;
var maior_idade = 0;
var menor_idade = 999;

for(var i = 0; i < 3; i++){
    nome = readline.question("Informe seu nome: ");
    idade = parseInt(readline.question("informe sua idade: "));

    if(idade > maior_idade){
        mais_velho = nome;
        maior_idade = idade;
    }
    if(idade < menor_idade){
        mais_novo = nome;
        menor_idade = idade;
    }
}
console.log(mais_velho + " e o mais velho!! com " + maior_idade + " anos");
console.log(mais_novo + " e o(a) mais novo(a)!! com " + menor_idade + " anos");