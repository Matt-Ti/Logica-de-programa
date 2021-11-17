var readline = require("readline-sync");
var temperatura = new Array();

var Maiortemp = 0;
var Menortemp = Infinity;

var MaiorMes;
var MenorMes; 

var temp

for(var mes = 0; mes < 12; mes++){
    temp = parseInt(readline.question(`informe a temperatura do mes ${mes + 1}: `));
    temperatura.push(temp);
}

for(var mes = 0; mes < temperatura.length; mes++){
    
    if(temperatura[mes] > Maiortemp){
        Maiortemp = temperatura[mes];
        MaiorMes = mes;
    }

    if(temperatura[mes] < Menortemp){
        Menortemp = temperatura[mes];
        MenorMes = mes;
    }
}

console.log(
    `no mes ${MaiorMes + 1} vai ter a maior temperatura com ${Maiortemp} graus \nno mes ${MenorMes + 1} vai ter a menor temperatura com ${Menortemp} graus.`
)