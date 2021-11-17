exports.insereordenado = function(vet, val){
    vet.push(val);
    vet = vet.sort(function(a, b) {
        return a - b;
    })

    console.log(vet)
}