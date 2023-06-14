const stringLengthCount = require('./stringLength');


test("Throw error", () => {
    const str = stringLengthCount('Hello World')
    expect( () => {}).toThrow()
})
