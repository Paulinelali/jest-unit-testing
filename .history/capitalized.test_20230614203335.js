


const capitalize = require('./capitalized')


describe('capitalize', () => {
    
    test('Check for capitalization', () => {
        const caller = capitalize('Captain')
        expect(caller).toBe('Captain')
    })
})