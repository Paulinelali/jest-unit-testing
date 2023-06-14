const stringLengthCount = require('./stringLength');


test("Throw error", () => {
    const str
    expect( () => {stringLengthCount('Hello')}).toThrow()
})
