let primeiroJogo = {
    nome: "Devil May Cry",
    valor: 49.50
}

let segundoJogo = {
    nome: "My Little Ponei",
    valor: 500.50,
    ttrabalho:{
        nome:"dev"
    }
}

let listaJogos = [primeiroJogo, segundoJogo]

let soma = 0;
//o inicio ; a condicao; o incremento
for (let indice = 0; indice < listaJogos.length; indice++) {
    soma  = somaDoisValores(soma, listaJogos[indice].valor)
}

function somaDoisValores(primeiroNumero,segundoNumero){
    return primeiroNumero + segundoNumero;
}