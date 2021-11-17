var readilne = require("readline-sync");
var estudos = require("estudos");
var N = 0;
var resposta = false;

console.log("verifica que um número informado é par ou impar");
N = parseInt(readilne.question("informe um numero inteiro: "));
//resto = N%2;
resposta = estudos.NumerosPar(N)

/* Operadores lógicos 
    (==) <- igual 
    (!=) <- diferente
    (<) <- menor que
    (<=) <- menor ou igual a
    (>) <- maior que 
    (>=) <- maior ou igual a
*/  

if(resposta == true){
    console.log("O número informado é par");
}else{
    console.log("O número informado é impar");
}
   
