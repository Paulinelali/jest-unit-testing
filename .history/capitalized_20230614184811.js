


const capitalize = (str) => {
    let firstLetter = str.charAt(0);
    let toUpper = firstLetter.toUpperCase();
    str = str.slice(1);
    let finalWord = toUpper + str;

    return finalWord;
}

