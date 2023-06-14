


const stringLengthCount = (str) => {
    if(str.length < 1 || str.length > 10){
        throw Error();
    }else{ return str.length}
}

module.exports = stringLengthCount