

const Calculator = {
    add: (num1, num2) => {
        if(num2 < 0){
            throw new Error("no-negative-value")
        }
        return num1 + num2
    },

    subtract: (num1, num2) => {
        if(num2 > num1){
            throw new Error('No-negative-nvalue')
        }
        return num1 - num2
    },
    divide: (num1, num2) => {
        if(num2 > num1){
            throw new Error('No-negative-nvalue')
        }
        return num1 + num2
    },
    multiply: (num1, num2) => {
        if(num1 < 0 || ){
            throw new Error('No-negative-nvalue')
        }
        num1 * num2},
}

module.exports = Calculator;