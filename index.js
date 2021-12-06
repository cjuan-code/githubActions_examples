// var fs = require('fs');
let memeMaker = require('meme-maker');
var core = require('@actions/core')

var frase_positiva = core.getInput("frase_positiva");
var frase_negativa = core.getInput("frase_negativa");
var result = core.getInput("resultado_tests");

function generateSucessMeme() {

    let text = frase_positiva.split(' ');

    let options = {
      image: 'img/success.png',         // Required
      outfile: 'img/meme.png',  // Required
      topText: text[0] + ' ' + text[1],            // Required
      bottomText: text[2] + ' ' + text[3] + ' ' + text[4] + ' ' + text[5] + ' ' + text[6],           // Optional
      fontSize: 50,                   // Optional
      fontFill: '#FFF',               // Optional
      textPos: 'center',              // Optional
      strokeColor: '#000',            // Optional
      strokeWeight: 2                 // Optional
    }
    
    memeMaker(options, function(err) {
      if(err) throw new Error(err)
      console.log('Image saved: ' + options.outfile)
    });
}

function generateFailedMeme() {

    let text = frase_negativa.split(' ');
    
    let options = {
      image: 'img/failed.png',         // Required
      outfile: 'img/meme.png',  // Required
      topText: text[0] + ' ' + text[1],            // Required
      bottomText: text[2] + ' ' + text[3] + ' ' + text[4] + ' ' + text[5] + ' ' + text[6],           // Optional
      fontSize: 50,                   // Optional
      fontFill: '#FFF',               // Optional
      textPos: 'center',              // Optional
      strokeColor: '#000',            // Optional
      strokeWeight: 2                 // Optional
    }
    
    memeMaker(options, function(err) {
      if(err) throw new Error(err)
      console.log('Image saved: ' + options.outfile)
    });
}

if (result == 'success') {
    // fs.writeFileSync('./README.md', '# ' + frase_positiva);
    generateSucessMeme()
} else if (result == 'failure') {
    // fs.writeFileSync('./README.md', '# ' + frase_negativa);
    generateFailedMeme()
}

console.log('Meme añadido al readme');