var readline = require("readline-sync");
var cadastro = new Array();
var nome = "";
var data_atual = new Date().getFullYear();
var data_nasc = 0;


nome = readline.question("informe o seu nome: ");
cadastro.push(nome);

data_nasc = parseInt(readline.question("informe o ano em que "+ nome +" nasceu: "));
cadastro.push(data_atual - data_nasc);

exibirmensagem(cadastro);

function exibirmensagem(){
    console.log(cadastro);
}
