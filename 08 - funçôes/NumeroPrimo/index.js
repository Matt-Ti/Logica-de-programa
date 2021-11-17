var readline = require("readline-sync");
var n = 0;
var count = 0;
var i = 0;

function NumeroPrimo(n){
    //dividir o numero "n" vezes
    var retorno = false;
    for(i = 1; i <= n; i++){
        if(n%1 == 0){
            count = count + 1/* ou count = count++*/;
        }
    
    }
    if(count == 2){
        retorno = true;
    }
    return retorno;
}

//parte principal do programa.
console.log("Programa que verifica se um numero e primo");
n = parseInt(readline.question("Informe um numero inteiro: "));
var resposta = NumeroPrimo(n);
if(resposta == true){
    console.log("O numero " + n + " e um numero primo");
}else{
    console.log("o numero " + n + " nao e um numero primo");
}