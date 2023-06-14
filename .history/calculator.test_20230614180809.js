

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

describe('Multiply num1 and num1', () => {
    test('num1 -num2', () => {
        expect(Calculator.subtract(5, 3)).toBe(2)
    })

    test('Throw error on negative number result', () => {
        expect( () => {Calculator.subtract(2, 3)}).toThrow()
    })
    
})

