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
    let table_modified = {};
    for (let letter_code of Object.keys(MORSE_TABLE)) {
        let key_modified = '';
        for (let i = 0; i < letter_code.length; i++) {
            key_modified += letter_code[i] === '-' ? '11' : '10';
        }
        key_modified = key_modified.padStart(10, '0');
        table_modified[key_modified] = MORSE_TABLE[letter_code];
    }
    table_modified['**********'] = ' ';

    let result = '';
    for (let i = 0; i < expr.length; i = i+10){
        result += table_modified[expr.substr(i,10)];
    }
    return result;
}


module.exports = {
    decode
}