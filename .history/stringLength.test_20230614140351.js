const stringLengthCount = require('./stringLength');

test("Return length of the string param", () => {
    const str = stringLengthCount('Hello World');
    expect(str).toBe(11)
})

test("Throw error", () => {

    const str = stringLengthCount('Hello World');
    expect( () => { }).toBeLessThan(11)
    expect( () => { }).toBeLessThan(11)
})