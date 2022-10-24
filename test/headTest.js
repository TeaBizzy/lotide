const { expect } = require("chai");
const head = require("../head");

describe("#head()", () => {
  it("should return 1 for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const output = 1;

    expect(head(input)).to.be.equal(output);
  });

  it("should return 5 for [5]", () => {
    const input = [5];
    const output = 5;

    expect(head(input)).to.be.equal(output);
  });

  it("should return 5 for [5, 6, 7]", () => {
    const input = [5, 6, 7];
    const output = 5;

    expect(head(input)).to.be.equal(output);
  });

  it("should return \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = "Hello";

    expect(head(input)).to.be.equal(output);
  });

  it("should return undefined for []", () => {
    const input = [];
    const output = undefined;

    expect(head(input)).to.be.equal(output);
  });
});