


const capitalize = require('./capitalized')


describe('capitalize', () => {
    
    test('Check for capitalization', () => {
        expect(capitalize("this")).toBe('Captain')
    })
})