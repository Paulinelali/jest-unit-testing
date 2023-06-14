
const capitalize = require("./capitalized");

describe("Capitalize", () => {
  test("Capitalize the string", () => {
    expect(capitalize("this")).toBe("This");
  });
});