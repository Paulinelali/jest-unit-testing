const stringLengthCount = require('./stringLength');

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello World');
    expect(str).toBe(11)
})

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello World');
    expect(str).toBeLessThan(10)
})