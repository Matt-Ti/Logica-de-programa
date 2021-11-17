var readline = require("readline-sync");
var pessoas = new Array();
var id;
var nome;
var sexo;
var ano_nasc;
var ano_atual = new Date().getFullYear();
var menu = ["ID", "NOME", "SEXO", "IDADE", "NASCIMENTO"]
var decisao = "sim";
pessoas.push(menu)

while(decisao == "sim"){
    var linha = new Array();

    id = parseInt(readline.question("Informe o ID: "));
    linha.push(id);
    
    nome = readline.question("Informe o seu nome: ");
    linha.push(nome);
    
    sexo = readline.question("Informe o seu sexo (M/F): ");
    sexo = sexo.toUpperCase();
    linha.push(sexo);
    
    ano_nasc = parseInt(readline.question("Informe o ano em que " + nome + " nasceu: "));
    linha.push(ano_atual - ano_nasc);
    linha.push(ano_nasc)

    pessoas.push(linha);
    
    decisao = readline.question("Quer continuar? [sim/nao]");
    //decisao.toUpperCase();
}

console.log(`\n------------------------------\n`);
console.log(pessoas);

