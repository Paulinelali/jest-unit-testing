

const Calculator = require('./calculator');

describe('addition test', () => {
    test('Add two numbers', () => {
        expect(Calculator.add(2,3)).toBe(5)
    })

    test('Throw error on negative number', () => {
        expect( () => {Calculator.add(2, -3)}).toThrow()
    })
    
})

describe('Subtract num2 from num1', () => {
    test('num1 -num2', () => {
        expect(Calculator.subtract(5, 3)).toBe(2)
    })

    test('Throw error on negative number result', () => {
        expect( () => {Calculator.subtract(2, 3)}).toThrow()
    })
    
})


describe('Divide num1 by num2', () => {
    test('num1 -num2', () => {
        expect(Calculator.divide(4, 2)).toBe(2)
    })

    test('Throw error on negative number result', () => {
        expect( () => {Calculator.divide(-4, -4)}).toThrow()
    })
    
    test('Throw error on negative number result', () => {
        expect( () => {Calculator.divide(-2, -4)}).toThrow()
    })
    
})



describe('Multiply num1 and num2', () => {
    test('num1 * num2', () => {
        expect(Calculator.multiply(5, 3)).toBe(15)
    })

    test('Throw error on negative number result', () => {
        expect( () => {Calculator.multiply(5, -3)}).toThrow()
    })
    
    test('Throw error on negative number result', () => {
        expect( () => {Calculator.multiply(-5, 3)}).toThrow()
    })
    
})

