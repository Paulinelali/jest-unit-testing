


const capitalize = require('./capitalized')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        const cap = capitalize("Captain")
        expect(cap).toBe('Captain')
    })
})