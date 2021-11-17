var readline = require("readline-sync");
var numeros = new Array();
var opmenu = 10

function Numeropar(n){
    var par = false
    if(n%2 == 0){
        par = true
    }
    return par;
}

function Lernumero(){
    var n = 0
    n = parseInt(readline.question("Qual valor deseja inserir: "));
    return n;
}

function Existente(n){
    var retorno = -1;
    var i = 0;
    while(i < numeros.length && numeros[i] != n){
        i++;
    }
    if(numeros[i] == n){
        retorno = i;
    }
    return retorno;
}

function inserir(){
    var n = Lernumero();
    if(Numeropar(n) == true && Existente(n) == -1){
        console.log("\ninserido com sucesso!!\n")
        numeros.push(n);
    }else{
        console.log("esse valor não e par ou ja foi inserido no array");
    }
}

function Listar(){
    for(var i = 0; i < numeros.length; i++){
        console.log(`[ ${i} ] ${numeros[i]}`);
    }
}

function Localizar(n){
    var pos = -1;
    var i = 0;
    while(i < numeros.length && numeros[i] != n){
        i++;
    }

    if(numeros[i] == n){
        pos = i;
    }

    return pos
}


function excluir(n){
    var pos = Localizar(n)
    if(pos != -1){
        var i = pos;
        while(i < numeros.length -1){
            numeros[i] = numeros[i + 1]
            i++;
        }
        numeros.push();
    }
}


function Menu(){
    retorno = 0;
    console.log("Programa que armaneza numeros pares");
    console.log("1 - Inserir um numero\n2 - Listar numeros\n3 - Excluir um numero");
    console.log("4 - Alterar um numero no array\n5 - Localizar um numero no array\n6 - Ordenar vetores\n0 - Sair");
    retorno = parseInt(readline.question("Digite o comado desejado: "));

    return retorno;
}

while(opmenu != 0){
    opmenu = Menu();

    switch (opmenu){
        case 1:
            inserir();
            break;
        case 2:
            Listar();
            break;
        case 3:
            var n = parseInt(readline.question("Digite o valor que deseja que excluir no array: "));
            var pos = excluir(n);
            if(pos != -1){
                console.log("\nValor exluido com sucesso!");
            }else(
                console.log("\nValor nao encontrado no array.")
            )
        case 4:

    }


}

console.log("\nObrigado por utilizar os nossos serviços!");