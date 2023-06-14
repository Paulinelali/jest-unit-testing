

const { default: expect } = require('expect');
const Calculator = require('./calculator');

describe('addition test', () => {
    const calculateAdd = Calculator.add(2,3);
    test('Add two numbers', () => {
        expect(calculate).toBe(5)
    })

    test('Check if numbers are negative', () => {
        expect()
    })
})