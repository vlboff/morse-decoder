const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let resArr = [];
    let morseSymbol = [];
    let morseStr = '';
    let codeStr = '';

    let codeArrSymbol = expr.match(/.{1,10}/g);

    for (i = 0; i < codeArrSymbol.length; i++){
            codeStr += `${codeArrSymbol[i].match(/.{1,2}/g)},`;
    }

    for (j = 0; j < codeStr.split(',').length; j++){
        if (codeStr.split(',')[j] == '00'){
            morseStr += ' '; 
        } else if (codeStr.split(',')[j] == '10'){
            morseStr += '.';
        } else if (codeStr.split(',')[j] == '11'){
            morseStr += '-';
        } else {
            morseStr += ' ';
        }
    }

    for (p = 0; p < morseStr.length; p += 5){
        morseSymbol.push(`${morseStr.slice(0+p, 5+p)}`);
    }

    for (let key in MORSE_TABLE){
        morseSymbol.forEach((letter) =>{ 
            if (key.includes(letter.trim())){
                resArr.push(`${MORSE_TABLE[key]}`);
            } else {
                resArr.push(` `);
            }
        })
    }

    // for (u = 0; u < morseSymbol.length; u++){

    //     if (morseSymbol[u].trim() == Object.keys(MORSE_TABLE)){
    //         result += `${Object.values(MORSE_TABLE)}` 
    //     }
    // }


    console.log(res);
 
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");



module.exports = {
    decode
}