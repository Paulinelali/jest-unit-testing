
const capitalize = require("./ca");

describe("Capitalize", () => {
  test("Capitalize the string", () => {
    expect(capitalize("this")).toBe("This");
  });
});