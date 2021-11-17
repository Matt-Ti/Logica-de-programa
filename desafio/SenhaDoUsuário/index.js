//Simulação de criação de senha
var readline = require("readline-sync");
var senha = 0;
var confirm_senha = 0;
var autorizado = "";

console.log("Pagina de criação de senha: ");
senha = parseInt(readline.question("informe a senha: "));
confirm_senha = parseInt(readline.question("digite novamente a senha: "));
autorizado = readline.question("voce esta autorizado? [ADM, FUN]: ");

if(senha == confirm_senha && autorizado == "ADM"){
    console.log("Senha criada com sucesso!");
}else{
    console.log("Criação de senha não autorizada, acesso negado.")
}