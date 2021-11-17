readline = require("readline-sync");
vetor = new Array();
valor = 0;

for(i = 0; i < 20; i++){
    valor = parseInt(readline.question("Informe o valor: "));

    vetor.push(valor)
}

vetor = vetor.sort(function(a,b) {return a - b})
for(i = 0; i < 20; i++){
    console.log(vetor[i])
}