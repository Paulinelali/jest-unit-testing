const stringLengthCount = require('./stringLength');

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello World');
    expect(str).toBe(5)

    expect(str).toBeLessThan(10)
})