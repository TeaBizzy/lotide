const { expect } = require("chai");
const eqArrays = require("../eqArrays");

describe("#eqArrays()", () => {
  it("should return true for [1, 2, 3], [1, 2, 3]", () => {
    const input = [1, 2, 3];
    
    expect(eqArrays(input, input)).to.be.equal(true);
  });

  it("should return false for [\"1\", \"2\"], [1, 2]", () => {
    const input1 = ["1", "2"];
    const input2 = [1, 2];
    
    expect(eqArrays(input1, input2)).to.be.equal(false);
  });

  it("should return false for [true, true, true], [true, true]", () => {
    const input1 = [true, true, true];
    const input2 = [true, true];
    
    expect(eqArrays(input1, input2)).to.be.equal(false);
  });

  it("should return true for [[2, 3], 1], [[2, 3], 1]]", () => {
    const input = [[2, 3], 1];
    
    expect(eqArrays(input, input)).to.be.equal(true);
  });

  it("should return false for [[1]], [1]", () => {
    const input1 = [[1]];
    const input2 = [1];
    
    expect(eqArrays(input1, input2)).to.be.equal(false);
  });
});