let fs = require('fs');

fs.readFile('./home.js', (err, data) => {
    data.renameFile('meuArquiNovo.js')
})