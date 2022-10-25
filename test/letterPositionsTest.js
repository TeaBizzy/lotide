const { expect } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions()", () => {
  it("should return {b: [0], e:[1, 2]} for \"bee\"", () => {
    const input = "bee";
    
    expect(letterPositions(input)).to.be.deep.equal({b: [0], e: [1, 2]});
  });

  it("should return {a: [0]} for \"a\"", () => {
    const input = "a";
    
    expect(letterPositions(input)).to.be.deep.equal({a: [0]});
  });

  it("should return {} for undefined", () => {
    const input = undefined;
    
    expect(letterPositions(input)).to.be.deep.equal({});
  });
});