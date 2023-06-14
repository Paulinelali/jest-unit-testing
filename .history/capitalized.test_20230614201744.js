


const capitalize = require('./capitalized')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect('Ca', ()=>{capitalize("Captain")}).toBe('Captain')
    })
})