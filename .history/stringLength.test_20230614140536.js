const stringLengthCount = require('./stringLength');

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello World');
    expect(str).toBe(11)
})

test("Throw error", () => {

    expect( () => {stringLengthCount('Hello World!')}).toThrow(11)
})
