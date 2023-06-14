


const capitalize = require('./capitalized')


describe('capitalize', () => {
    test("Capitalize the string", () => {
        expect(capitalize("this")).toBe("This");
      })
})