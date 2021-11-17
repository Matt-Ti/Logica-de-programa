var readline = require("readline-sync");
var vetNomes = [];
var vetNotas = [];

for(var i = 0; i < 2; i++) {
    /*Nome = readline.question("informe seu nome: ");
        vetNomes.push(Nome);
    
    Nota = parseInt(readline.question("informe sua nota: "));
        vetNotas.push(Nota);*/
    vetNomes[i] = readline.question("informe seu nome: ")
    vetNotas[i] = readline.question("informe seu nota: ")
}

for(var i = 0; i < 2; i++)
    console.log(`Aluno ${i+1}: ${vetNomes[i]}; nota: ${vetNotas[i]};`);


