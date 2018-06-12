let express = require('express');
let bodyParser = require('body-parser')
let cors = require('cors');

let app = express()
//faz com que nossa API aceite JSON
app.use(bodyParser.json())
app.use(cors())

//lista de ceps
var listaCeps = [];

app.get('/ws/ceps', function (requisicao, resposta) {
    resposta.send(listaCeps)
})

//cep 
//localidade
app.post('/ws/ceps', function (requisicao, resposta) {
    //adiciona mais um cep na nossa listagem
    listaCeps.push(requisicao.body)

    resposta.send({
        message: 'Deu certo'
    })
})

app.listen(3000, function () {
    console.log('Rodando na porta 3000')
})