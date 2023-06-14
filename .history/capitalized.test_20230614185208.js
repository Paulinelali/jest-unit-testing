


const capitalize = require('./capitalized')


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Captain")}).toE('Captain')
    })
})