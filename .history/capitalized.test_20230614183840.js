cpnst capitalize = require('')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Captain")}).toBe('Captain')
    })
})