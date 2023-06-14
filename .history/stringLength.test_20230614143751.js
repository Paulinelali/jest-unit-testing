const stringLengthCount = require('./stringLength');

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello');
    expect(str).toBe(5)
})

test("Throw error", () => {
    expect( () => {stringLengthCount('Hello World')}).toThrow()
})
