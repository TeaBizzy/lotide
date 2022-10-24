const { expect } = require("chai");
const middle = require("../middle");

// TEST CODE
describe("#middle()", () => {
  it("should return [1] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const output = [1];

    expect(middle(input)).to.be.deep.equal(output);
  });

  it("should return [1, 2] for [true, false, false, true]", () => {
    const input = [true, false, false, true];
    const output = [1, 2];

    expect(middle(input)).to.be.deep.equal(output);
  });

  it("should return [0] for [3, 4]", () => {
    const input = [3, 4];
    const output = [];

    expect(middle(input)).to.be.deep.equal(output);
  });

  it("should return [] for [1]", () => {
    const input = [1];
    const output = [];

    expect(middle(input)).to.be.deep.equal(output);
  });

  it("should return [] for []", () => {
    const input = [];
    const output = [];

    expect(middle(input)).to.be.deep.equal(output);
  });
});