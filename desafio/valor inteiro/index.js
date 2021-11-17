var readline = require("readline-sync");
var valor = 0;
var texto1 = "Ok"
var texto2 = "Nao ok"
valor = parseInt(readline.question("informe o numero: "));

if(valor < 5 && (valor == 2 || valor == 4)){
    console.log(texto1)
}else{
    console.log(texto2)
}