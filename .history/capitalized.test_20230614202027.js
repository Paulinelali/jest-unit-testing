


const capitalize = require('./capitalized')


describe('capitalize', () => {
    
    test('Check for capitalization', () => {
        const cap = capitalize("Captain")
        expect(cap).toBe('Captain')
    })
})