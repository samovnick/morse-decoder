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
    // write your solution here
    let str = '';
    let chars = [];
    let i = 0;
    while (i < expr.length) {
        chars.push(expr.slice(i, i + 10));
        i += 10;
    };
    // console.dir(chars);
    let letters = chars.map(element => {
        let char = "";
        let index = element.indexOf('1') + 1;
        if (index) {
            let letter = "";
            if (index % 2 == 0) char = element.slice(index);
            else char = element.slice(index - 1);
            for(let i = 0; i < char.length; i += 2) {
                if (char[i + 1] == "1") letter += "-";
                else letter += "."
            };
            return MORSE_TABLE[letter];
        } else return " ";

        return index;
    });

    // console.dir(letters);

    return letters.join("");
}

module.exports = {
    decode
}