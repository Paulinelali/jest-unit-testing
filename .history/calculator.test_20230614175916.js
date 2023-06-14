

const Calculator = require('./calculator');

describe('addition test', () => {
    test('Add two numbers', () => {
        expect(Calculator.add(2,3)).toBe(5)
    })

    test('Throw error on negative number', () => {
        expect( () => {Calculator.add(2, -3)}).toThrow()
    })
    
})

describe('Substract num2 from num1', () => {
    test('Add two numbers', () => {
        expect(Calculator.add(2,3)).toBe(5)
    })

    test('Throw error on negative number', () => {
        expect( () => {Calculator.add(2, -3)}).toThrow()
    })
    
})