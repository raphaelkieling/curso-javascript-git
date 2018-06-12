function botaEmMaisculo(nome) {
    return new Promise(function (resolve, reject) {
        let nomeNovo = nome.toUpperCase()

        resolve(nomeNovo)
    })
}

let minhaPromessa = botaEmMaisculo('nome')


minhaPromessa
    .then(function (resposta) {
        //filtragem por genero
    })
    .then(function(resposta){
        //filtra por nome
    })
    .then(function(resposta){
        //bota valore em order crescente de valores
    })
