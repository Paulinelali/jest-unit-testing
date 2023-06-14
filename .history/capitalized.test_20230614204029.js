
const capitalize = require("./capita");

describe("Capitalize", () => {
  test("Capitalize the string", () => {
    expect(capitalize("this")).toBe("This");
  });
});