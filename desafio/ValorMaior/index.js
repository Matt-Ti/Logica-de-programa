var readline = require("readline-sync");
var valor;
var MaiorValor = 0;

for(var i = 0; i < 5; i++){
    valor = parseInt(readline.question("Informe o valor: "));
    
    if(valor > MaiorValor){
        MaiorValor = valor;
    }
}
console.log("O maior valor digitado foi: " + MaiorValor);