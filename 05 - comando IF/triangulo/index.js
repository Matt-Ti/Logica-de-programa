var readline = require("readline-sync");
var la = 0;
var lb = 0;
var lc = 0;
var texto = "Os valores informado nao representam os lados de um triangulo";

//Entrada de dados 
console.log("programa que verifica se os valores informados representam os lados de um triangulo");
la = parseFloat(readline.question("Informe o valor do lado A: "));
lb = parseFloat(readline.question("Informe o valor do lado B: "));
lc = parseFloat(readline.question("Informe o valor do lado C: "));
/* 
if(La < (Lb + Lc)){
    if (Lb < (La + Lc)){
        if(Lc < (Lb + La)){
            texto = "os valores informados representam os lados de um triangulo";
        }
    }
}*/
/*
|| - ou
&& - e
*/
if((la < (lb + lc)) && (lb < (la + lc)) && (lc < (lb + la))){
    texto = "os valores informados representam os lados de um triangulo";
}
console.log(texto);   
