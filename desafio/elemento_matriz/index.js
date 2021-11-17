var matriz = [
    [-1, 1, 2],
    [2, -9, 1],
    [-8, -9, 2]
];

function verificadormatriz(matriz){
    var maior = 0;
    var maiorpos = '';

    for(var i = 0; i < matriz.length; i++){
        for(var j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] >= maior){

                maiorpos = matriz[i][j] == maior ? maiorpos += `pos[${i} ${j}]\n` : `pos[${i} ${j}]\n`;
                
                maior = matriz[i][j];
            }
        }
    }   
    console.log(`valor maior: ${maior}\ne sua posição:\n${maiorpos}`)
}

verificadormatriz(matriz);
