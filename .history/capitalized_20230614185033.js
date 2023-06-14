


const capitalize = (str) => {
    let firstLetter = str.charAt(0);
    let toUpper = firstLetter.toUpperCase();
    let wordP = str.slice(1);
    let finalWord = toUpper + wordP;

    return finalWord;
}

module.export = capitalize;