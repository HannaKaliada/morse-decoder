const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprAsArr = expr.split('');
    let lettersArr = [];
    let resultArr = [];
    for (let i = 0; i < exprAsArr.length; i += 2) {
        lettersArr.push(exprAsArr.slice(i, i + 2).join(''));
    }
    lettersArr = lettersArr.map((letter) => {
        if (letter == '10') {
            return '.';
        }
        else if (letter == '11') {
            return '-'
        }
        else {
            return letter;
        }
    });
    for (let i = 0; i < lettersArr.length; i += 5) {
        resultArr.push(lettersArr.slice(i, i + 5).join(''));
    }
    resultArr = resultArr.map(letter => {
        letter = letter.replace(/^0+|(\.0*\d+[^0]+)0+$/, '');
        if (MORSE_TABLE[letter]){
            return MORSE_TABLE[letter];
        }
        else if (letter == '**********') {
            return ' ';
        }
    })
    return resultArr.join('');
}

module.exports = {
    decode
}