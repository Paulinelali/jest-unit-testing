const { describe } = require('yargs');
const Calculator = require('./calculator');

describe('addition test', () => {
    const calculate = Calculator.add(7, 8);
    test('Add two numbers', () => {
        expectcalculate}).toBe(15)
})