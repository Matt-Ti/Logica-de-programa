/*function exibirmensagem(){
    console.log("Minha primeira funcao");
}

exibirmensagem();

function exibirmensagemPlus(txt){
    console.log(txt);
}
exibirmensagemPlus("alo mundo");
var valor = "primeira aula sobre funcao"
exibirmensagemPlus(valor)
*/

function NumeroPar(num){
    var retorno = false
    if(num%2 == 0){
        retorno = true
    }
    return retorno;
} 

var par = NumeroPar(6)
console.log(par);