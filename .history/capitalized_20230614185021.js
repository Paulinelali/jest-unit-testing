


const capitalize = (str) => {
    let firstLetter = str.charAt(0);
    let toUpper = firstLetter.toUpperCase();
    let word = str.slice(1);
    let finalWord = toUpper + str;

    return finalWord;
}

module.export = capitalize;