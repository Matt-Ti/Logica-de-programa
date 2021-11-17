var readline = require("readline-sync");
var tl = 0;
var total = 0;
var valor = 0; 
var media = 0;
var resp = "sim";

console.log("programa que calcula a media de N numeros.");
while (resp == "sim"){
    tl = parseInt(readline.question("Qual e a quantidade de nuemros que quer informar: "));
    i = 0;
    while (i < tl){
        valor = parseFloat(readline.question("informe o numero "+(i+1)+": "));
        total = total + valor;
        i = i + 1;
    }

    media = total / 2;
    console.log("A media é "+ media);
    console.log("Digite sim para calcular outra media ou qualquer outro valor para sair do programa");
    resp = readline.question("informe sua resposta: ");
    resp = resp.toLowerCase();
}