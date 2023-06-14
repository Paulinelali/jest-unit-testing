const { default: expect } = require("expect");
const { describe } = require("yargs");


describe('Capitalize', () => {
    
    test('Check for capitalization', () => {
        expect( ()=>{capitalize("Capta")}).toBe('Captain')
    })
})