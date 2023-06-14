


const capitalize = require('./capitalize')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Captain")}).toBe('Captain')
    })
})