var readline = require("readline-sync");

var valor = parseInt(readline.question("Informe um numero valor: "));
var contador = 0;

if(valor%2){ 
    contador = 5;
}else{
    contador = 10;
}

while(contador != 0){
    console.log(valor);
    contador--;
}