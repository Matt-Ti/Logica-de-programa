var readline = require("readline-sync");
var valor = 0;
var D = 0;
var resp = "sim";

while(resp == "sim"){
console.log("================= \nCriança esperança \n=================")
console.log("Muito obrigado por ajudar \nEscolha uma alternativa a baixo: ")
console.log("[1] para doar R$10 \n[2] para doar R$25 \n[3] para doar 50R$ \n[4] para doar outros valores ")
D = parseInt(readline.question("Digite o numero: "));
switch (D){
    case 1:
        valor = 10
        console.log("voce doou R$"+ valor)
        break;
    case 2:
        valor = 25
        console.log("voce doou R$"+ valor)
        break;
    case 3:
        valor = 50
        console.log("voce doou R$"+ valor)
        break;
    case 4:
        valor = parseInt(readline.question("informe quanto voce quer doar "))
        console.log("voce doou R$"+ valor)
    }
    console.log("Gostaria de doar mais?\n Se gostar, digite sim para continuar ou digite nao para sair")
    resp = readline.question("informe sua resposta: ")
    resp = resp.toLowerCase();
}
console.log("Saindo...")
