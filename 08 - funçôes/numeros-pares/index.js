//variavéis globais
var readline = require("readline-sync");
var numeros = new Array();
var opmenu = 10;

function Numeropar(n){
    var par = false;
    if(n%2 == 0){
        par = true;
    }
    return par;
}

function Lernumero(){
    var n = 0;
    n = parseInt(readline.question("Digite o numero: "));
    return n;
}

function inserir(){
    var n = Lernumero();
    if(Numeropar(n) == true && Existente(n) == -1){
        numeros.push(n);
    } else{
        console.log("esse valor não é par ou já está inserido, tente novamente.")
    }
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

function Listar(){
    for(var i = 0; i < numeros.length; i++){
        console.log("[" + i + "]" + numeros[i]);
    }
}

function ordenarVetor(){
    numeros = numeros.sort(function(pos, pos1){
        return pos - pos1
    })
    console.log("O vetor foi ordenado")    
}

function Localizar(n){
    var pos = -1;
    var i = 0;
    while(i < numeros.length && numeros[i] != n){
        i++
    }
    
    if(numeros[i] == n){
        pos = i;
    }
    return pos
}

function Alterar(n1, n2){
    var retorno = false;
    var pos = Localizar(n1);
    if(pos != -1 && Localizar(n2) == -1){
        retorno = true;
        numeros[pos] = n2;
    }
    return retorno;
}

function Excluir(n){
    var pos = Localizar(n)
    if(pos != -1){
        //numeros[pos] = numeros[numeros.length - 1];
        var i = pos;
        while(i < numeros.length -1){
            numeros[i] = numeros[i + 1]
            i++;
        }
        numeros.pop();
    }
}

/* 
i - Inserir um numero ok
2 - Listar os numeros cadastrados ok
3 - Excluir um numero 
4 - Alterar um numero no array ok
5 - Localizar um numero no array ok
6 - ordenar vetor ok
0 - Para sair
*/
function exibemenu(){
    var retorno = 0;
    console.log("Sistema de controle de numeros pares ");
    console.log("1 - inserir um numero\n2 - Listar os numeros cadastrados\n3 - Excluir um numero");
    console.log("4 - Alterar um numero no array\n5 - Localizar um numero no array\n6 - Ordenar vetores\n0 - para sair");
    retorno = parseInt(readline.question("Digite sua escolha: "));
    //console.log(retorno)
    return retorno;
}

while(opmenu != 0){
    opmenu = exibemenu();

    if(opmenu == 1){
        inserir();      
    }

    if(opmenu == 2){
        Listar();
    }
    if(opmenu == 3){
        var n = parseInt(readline.question("Digite o valor que deseja excluir: "));
        var pos = Excluir(n);
        if(pos != -1){
            console.log("--------------\nvalor excluido\n--------------");
        }else{
            console.log("--------------\nvalor nao encontrado no array\n--------------");
        }
    }
    if(opmenu == 6){
        ordenarVetor();
    }

    if(opmenu == 5){
        var n = parseInt(readline.question("informe o valor que deseja ser localizado: "));
        var pos = Localizar(n);
        //var pos = numeros.indexOf(n);
        if(pos != -1){
            console.log("-------------\nO valor " +n+ " foi localizado na posicao "+pos+"\n-------------");
        }else{
            console.log("Valor não encontrado.");
        }
    }

    if(opmenu == 4){
        var n1 = parseInt(readline.question("Informe o valor que sera alterado: "));
        var n2 = parseInt(readline.question("Informe o novo valor: "));
        if(Numeropar(n2) == true){
            if(Alterar(n1,n2) == true){
                console.log("\nValor alterado com sucesso!\n");
            }else{
                console.log("Valor nao encontrado no array");
            }
        }else{
            console.log("O array armazena apenas numeros pares.");
        }
    }

}

console.log("Obrigado por utilizar o nosso sistema!!!");
