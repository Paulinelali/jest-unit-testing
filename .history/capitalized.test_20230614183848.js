cpnst capitalize = require('./c')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Captain")}).toBe('Captain')
    })
})