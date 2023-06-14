

const Calculator = require('./calculator');

describe('addition test', () => {
    const calculate = Calculator.add(2,3);
    test('Add two numbers', () => {
        expect(calculate).toBe(5)
    })

    test('Check if numbers are negative', () => {
        test('Throw error if param is negative', ())
    })
})