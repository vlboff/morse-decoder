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
    '*****':  ' ',
};

function decode(expr) {
    
    let resArr = [];
    let morseStr = '';
    let codeStr = '';
    

    let codeArrSymbol = expr.match(/.{1,10}/g);

    for (let i = 0; i < codeArrSymbol.length; i++){
            codeStr += `${codeArrSymbol[i].match(/.{1,2}/g)},`;
    }

    for (let j = 0; j < codeStr.split(',').length; j++){
        if (codeStr.split(',')[j] == '00'){
            morseStr += ' '; 
        } else if (codeStr.split(',')[j] == '10'){
            morseStr += '.';
        } else if (codeStr.split(',')[j] == '11'){
            morseStr += '-';
        } else if (codeStr.split(',')[j] == '**'){
            morseStr += '*';
        }
    }


    let arrMorse = morseStr.match(/.{1,5}/g);


    arrMorse.forEach((letter) => {for (let key in MORSE_TABLE){ 
        if (key === letter.trim()){
            resArr.push(`${MORSE_TABLE[key]}`);
        } 
    }});

    let result = resArr.join('');
    console.log(result);
}
decode("0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010")

module.exports = {
    decode
};