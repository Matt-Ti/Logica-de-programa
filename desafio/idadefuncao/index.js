function Ano_nascimento(nome, idade){
    var ano_nasc = 0;
    var ano_atual = new Date().getFullYear();
    var ano_nasc = ano_atual - idade;
    console.log(`Meu nome é ${nome}, nasce no ano ${ano_nasc}, e tenho ${idade} anos.`)
}

Ano_nascimento("mateus", 20);