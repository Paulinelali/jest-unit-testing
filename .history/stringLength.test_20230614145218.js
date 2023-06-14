const stringLengthCount = require('./stringLength');


test("Throw error", () => {
    const str = stringLengthCount('Hello')
    expect( () => str).toThrow()
})