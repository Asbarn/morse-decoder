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
    ' ': ' '
};

function decode(expr) {
    let words = [], newStr = "";
    for (let i = 0; i < expr.length; i += 10) {
        words.push(expr.slice(i, i + 10));
    }
    return words.map((str) => {
        newStr="";
        if (str == '**********') return " ";
        while (str.length) {
            switch (str.slice(0, 2)) {
                case '11': {newStr+='-'; break;}
                case '10': {newStr+='.'; break;}
                default: newStr+='';
            }
            str = str.slice(2);
        }
        return newStr;
    }).map(el => MORSE_TABLE[el]).join('')
}

module.exports = {
    decode
}