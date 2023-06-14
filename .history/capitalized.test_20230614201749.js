


const capitalize = require('./capitalized')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect('Capitalize', ()=>{capitalize("Captain")}).toBe('Captain')
    })
})