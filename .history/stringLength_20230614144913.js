


const stringLengthCount = (str) => {
    if(str.length < 1 || str.length > 10){
        throw new Error('Parameter is not a number!');
    }
    return str.length
}

module.exports = stringLengthCount