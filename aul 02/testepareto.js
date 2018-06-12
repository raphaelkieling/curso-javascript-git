let _ = require('paretojs')


let funcao = _.debounce(function(){
    console.log('Meu nome não é jhony')
},3000)

funcao()