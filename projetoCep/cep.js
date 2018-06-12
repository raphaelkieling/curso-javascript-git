//document = html
//getElementById= pega o elemento pelo id
let botao = document.getElementById('buscar')

//pega o campo de texto do html atráves da função
//getElementById traduzido para 'pega elemento pelo id'
let campoDeTexto = document.getElementById('cep')

botao.textContent = "Buscar algum cep"

botao.onclick = function () {
    vaiNaApiPegaDados()
}   

function vaiNaApiPegaDados() {
    axios
        .get('https://viacep.com.br/ws/'+ campoDeTexto.value +'/json/')
        .then(function (resposta) {
            console.log(resposta)
        })
}

//1 - pega o elemento getElementById 'nomeCidade'
//2 - coloca o nome da cidade no textContent do elemento
// elementoQueEuPeguei.textContent = nomeCidade

