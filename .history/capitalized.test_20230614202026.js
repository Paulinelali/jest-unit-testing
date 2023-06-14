


const capitalize = require('./capitalized')


describe('capitalizecapitalize', () => {
    
    test('Check for capitalization', () => {
        const cap = capitalize("Captain")
        expect(cap).toBe('Captain')
    })
})