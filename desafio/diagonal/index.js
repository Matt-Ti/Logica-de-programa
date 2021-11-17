var matriz = [
    [10, 20, 30],
    [10, 20, 30],
    [10, 20, 30]
]

var soma_diagonal = 0;

for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(i == j){
            //totaldiagonal = totaldiagonal + matriz[i][j]
            soma_diagonal += matriz[i][j]
        }
    }
}

console.log(totaldiagonal)