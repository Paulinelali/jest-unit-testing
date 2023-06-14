cpnst capitalize = require('./ca')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Captain")}).toBe('Captain')
    })
})