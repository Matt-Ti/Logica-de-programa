function somar(a, b){return a + b};
function subtrair(a, b){return a - b};
function multiplicar(a, b){return a * b};
function divisao(a, b){return a / b};

function armanezar(valor, vet){
    return vet.push(valor);
}

function ExibirvetorMaiorMenor(vetResultado){
    
    var maior = 0;
    var menor = 1000000;

    console.log("\n----------------------------\n");
    console.log("vetor ");

    for(var i = 0; i < vetResultado; ++i){
        console.log(vetResultados[i]);

        if(vetResultados[i] > maior){
            maior = vetResultado[i]
        }
        if(vetResultado[i] < menor){
            menor = vetResultado[i]
        }
    }
}

function gerenciarcalculadora(valor1, valor2, operacao){

    switch(operacao){

        case '+':
            return somar(valor1, valor2);
            break;
        
        case '-':
            return subtrair(valor1, valor2);
            break

        case '*':
            return multiplicar(valor1, valor2);
            break

        case '/':
            return divisao(valor1, valor2);
            break
    }
}
function main(){
    
    var readline = require("readline-sync");
    var v1;
    var v2;
    var op;
    var resultado;
    var vetorResultados = new Array();
    var continuar = true;   
   
    while(continuar){

        console.log("Programa que calcula em quatro operacaos\n");
        v1 = parseInt(readline.question("Informe o primeiro valor: "));
        v2 = parseInt(readline.question("Informe o segundo valor: "));
        op = parseInt(readline.question("Informe a operacao que deseja executar[+, -, *, /]: "));

        resultado = gerenciarcalculadora(v1, v2, op);
        console.log(`resultado: ${v1} ${op} ${v2} = ${resultado}`);
        console.log("\n--------------------------------------------\n");

        if(v1 == 0 && v2 == 0 && op == "0"){
            continuar = false;
        }else{
            armanezar(resultado, vetorResultados)
            continuar = true
        }
    }
    

    ExibirvetorMaiorMenor(vetorResultados)

    console.log("Programa finalizado");


}

main()