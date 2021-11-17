function cadastro(){
    var linha = new Array();
    var id;
    var nome;
    var sexo;    
    var data_atual = new Date().getFullYear();
    var data_nasc;

    id = parseInt(readline.question("insira o ID: "));
    linha.push(id);

    nome = readline.question("Insira o nome: ");
    linha.push(nome);

    sexo = readline.question("insira o sexo [M/F]");
    sexo = sexo.toUpperCase();
    linha.push(sexo);

    data_nasc = parseInt(readline.question("insira o ano em que nasceu: "));
    linha.push(data_atual - data_nasc);
    linha.push(data_nasc);

    pessoas.push(linha);
    

    
}


var readline = require("readline-sync");
var resp = "sim";
var pessoas = new Array();
var menu = ["ID", "NOME", "SEXO", "IDADE", "NASCIMENTO"]

pessoas.push(menu)


while(resp == "sim"){
    console.log("=================\n    CADASTRO\n=================");
    cadastro()

    resp = readline.question("voce quer cadastra mais pessoas? [sim/nao] ")
}

console.log("\n-------------------------------\n")
console.log(pessoas);

