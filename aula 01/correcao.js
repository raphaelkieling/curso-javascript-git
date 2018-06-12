// (01) criar uma listagem de palavras
var lista = ['palavra 1', 'palavra 2', 'palavra 3']
let listaLet = ['palavra 1', 'palavra 2', 'palavra 3']
let listaNovo = new Array(10)

// (02) fazer um for que lista cada palavra
//inicializao | enquanto | quanto incrementa
for (let i = 0; i < lista.length; i = i + 1) {
    //para printar (mostrar na tela)
    console.log(lista[i])
}

for (let item of lista) {
    // OF retorna o item
    console.log('[Item  OF]: ' + item)
}

for (let itemIndex in lista) {
    // IN retorna a posição de cada item
    console.log('[Item IN]: ' + lista[itemIndex])
}
// (03) trocar cada palavra da lista pela mesma palavra mais "You WIN!" exemplo de como ela vai ficar lembrando que não pode ser trocado na mão a palavra YOU WIN tem que ser colocada dentro do FOR em cada uma delas
// let lista = ['palavra 1 YOU WIN!','palavra 2 YOU WIN!']
for (let item of lista) {
    item = item + ' YOU WIN'
    console.log('[03]', item)
}
// (04) criar um objeto chamado Pessoa com os atributos 
//,nome e idade e fazer um IF para verificar se a idade 
//dele é maior que 18 se for maior que 18 mostrar no 
//console.log "Você já pode comprar bebidas alcoólicas!"
class Pessoa {
    constructor(nomeParametro, idade) {
        this.nome = nomeParametro;
        this.idade = idade;
    }
}

let novaPessoa = new Pessoa('Raphael', 20);
//define atributos
console.log(novaPessoa)

if (novaPessoa.idade > 18) {
    console.log("Você já pode comprar bebidas alcoólicas!")
}
// console.log('Pessoa abaixo')
// console.log(novaPessoa)


// (05) criar um função que soma 4 números e printar o resultado no console.log
listaNumeros = [20, 30, 40, 40, 120]
somarNumero(listaNumeros)

function somarNumero(listaDeNumeros) {
    resultadoFinal = 0;
    for (let numero of listaDeNumeros) {
        resultadoFinal = resultadoFinal + numero;
    }

    console.log('[top]', resultadoFinal)
}


// (06) Responder as seguintes perguntas
// Porque utilizamos funções na programação?
// R E U T I L I Z A Ç Ã O


// Porque existem os callbacks?
// a gente conseguir colocar funções em uma fila


// (07) criar um função que recebe idade e através de um
// callback retorna se ele é maior ou não de idade

function maiorDeIdade(idade, cb) {
    if (idade >= 18) {
        cb(true)
    } else {
        cb(false)
    }
}

maiorDeIdade(18, function (ehmaior) {
    console.log(ehmaior)
})


setTimeout(function () {
    console.log('sou lindo')
}, 3000)