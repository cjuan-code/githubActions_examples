var fs = require('fs');
var core = require('@actions/core')

var frase_positiva = core.getInput("frase_positiva");
var frase_negativa = core.getInput("frase_negativa");
var result = core.getInput("resultado_tests");

if (result == 'sucess') {
    fs.writeFileSync('./README.md', '# ' + frase_positiva);
} else if (result == 'failure') {
    fs.writeFileSync('./README.md', '# ' + frase_negativa);
}

console.log('Meme añadido al readme');