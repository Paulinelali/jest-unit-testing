const stringLengthCount = require('./stringLength');


test("Throw error", () => {
    const str = stringLengthCount('Hello World')
    expect( () => str).toThrow()
})
