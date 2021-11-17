function somar(a, b){return a + b};
function dividir(a, b){return a / b};
function subtrair(a, b){return a - b};
function multiplicar(a, b){return a * b};

function armanezar(valor, vet) {
    return vet.push(valor);

}

function exibirvetorMaiorMenor(vetresultado) {

    var maior = 0;
    var menor = 100000;

    console.log("\n----------------------------\n");
    console.log("vetor: ");

    for(var i = 0; i < vetresultado.length; i++){
        console.log(vetresultado[i]);

        if(vetresultado[i] > maior)
            maior = vetresultado[i];

        if(vetresultado[i] < menor)
            menor = vetresultado[i];

    }

    console.log(`\n-------------------------------\n`);
    console.log(`Maior = ${maior} e Menor = ${menor}`);
}

function gerenciarCalculadora(valor1, valor2, operacao){

    switch(operacao) {
        case '+':
            return somar(valor1, valor2)
            break;
        
        case '-':
            return subtrair(valor1, valor2)
            break;
        
        case '*':
            return multiplicar(valor1, valor2)
            break;
        
        case '/':
            return dividir(valor1, valor2)
            break;
    }
}

function main() {
    var readline = require("readline-sync");
    var v1;
    var v2;
    var op;
    var resultado;
    var vetorResultados = [];
    var continuar;

    do {
        v1 = parseInt(readline.question("valor 1: "));
        v2 = parseInt(readline.question("valor 2: "));
        op = readline.question("Operacao [+, -, *, /]: ");

        resultado = gerenciarCalculadora(v1, v2, op);
        console.log(`${v1} ${op} ${v2} = ${resultado}`);
        console.log("\n--------------------------------------\n");

        if(v1 == 0 && v2 == 0 && op == '0')
        continuar =  false;
        else {
        armanezar(resultado, vetorResultados);
        continuar =  true;
        }
            
    }while(continuar);

    exibirvetorMaiorMenor(vetorResultados)

    console.log("Programa finalizado");

}

main()