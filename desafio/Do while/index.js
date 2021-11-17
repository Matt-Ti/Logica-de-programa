var readline = require("readline-sync");

    var valor = parseInt(readline.question("Informe um valor: "));

    do{
        switch (valor) {
            case 1:
                console.log("inicio");
                break;
            case 2:
                console.log("cadastro");
                break;
            case 3:
                console.log("Placar");
                break;
            case 4:
                console.log("Jogo");
                break;
            default:
                console.log("Opção inexistente");
                break;                
        }
     
        valor = parseInt(readline.question("informe um valor: "))
    }while (valor != 0);

    