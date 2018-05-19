function subtracao(primeiroNumero, segundoNumero, mostraNaTelaDeDENTRO) {
    mostraNaTelaDeDENTRO(primeiroNumero - segundoNumero);
}

function mostraNaTelaDeFORA(valorDeResultadoQueVeio) {
    // console.log(valorDeResultadoQueVeio)
}

// Com nome
subtracao(2018, 1998, mostraNaTelaDeFORA);


// criar função palavra e colocar em letra maiuscula
// nome.toUpperCase()

// Coloca em maisculo---------------------------
let nomeDoCara = 'roguerinho' 
function botaEmMaisculo(nome,callback){
    let maisculo = nome.toUpperCase();
    callback(maisculo);
}

botaEmMaisculo(nomeDoCara ,function(palavraQueAgoraEMaiscula){
    console.log(palavraQueAgoraEMaiscula);
})


// Area ao quadrado---------------------------

areaAoQuadrado(5, 5, function (err, resultadoArea) {
    console.log(resultadoArea)
})

function areaAoQuadrado(x,y, funcaoDeRetorno){
    let calculo = x * y * 2;
    let error = false;

    if(calculo > 20){
        error = true;
    }

    funcaoDeRetorno(error,calculo);
}

