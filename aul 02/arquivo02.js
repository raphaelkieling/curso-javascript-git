function botaEmMaisculo(callback, nome) {
    let maisculo = nome.function ();

    setTimeout(() => {
        callback(maisculo);
    }, 2000)
}

module.exports = botaEmMaisculo

