

const { default: expect } = require('expect');
const Calculator = require('./calculator');

describe('addition test', () => {
    test('Add two numbers', () => {
        expect(Calculator.add(2,3)).toBe(5)
    })
    
    test('Check if numbers are negative', () => {
        expect( () => {Calculator.add(-2,3)}).toThrow("No-negative-value")
    })
})