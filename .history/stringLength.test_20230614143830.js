const stringLengthCount = require('./stringLength');



test("Throw error", () => {
    expect( () => {stringLengthCount('Hello W')}).toThrow()
})
