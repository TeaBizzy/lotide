const { expect } = require("chai");
const without = require("../without");

describe("#without()", () => {
  it("should return [1, 2, 3] for [1, 2, 3, 4, 5], [4, 5]", () => {
    const input1 = [1, 2, 3, 4, 5];
    const input2 = [4, 5];
    
    expect(without(input1, input2)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [1, 2, 3] for [false, 1, 2, true, 3], [true, false]", () => {
    const input1 = [false, 1, 2, true, 3];
    const input2 = [true, false];
    
    expect(without(input1, input2)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [1, 2, 3] for [1, 2, 3], []", () => {
    const input1 = [1, 2, 3];
    const input2 = [];
    
    expect(without(input1, input2)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [] for [], [true, false]", () => {
    const input1 = [];
    const input2 = [true, false];
    
    expect(without(input1, input2)).to.be.deep.equal([]);
  });
});