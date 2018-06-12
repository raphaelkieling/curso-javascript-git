let nomeDoCara = 'roguerinho' 
function botaEmMaisculo(nome,cb){
    let maisculo = nome.toUpperCase();
    cb(maisculo);
}


//manda para outro arquivo (exporta)
module.exports  = botaEmMaisculo