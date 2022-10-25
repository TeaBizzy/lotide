const { expect } = require("chai");
const takeUntil = require("../takeUntil");

describe("#takeUntil()", () => {
  it("should return [1, 2, 3] for [1, 2, 3, 4, 5], (value) => value > 3", () => {
    const input = [1, 2, 3, 4, 5];
    
    expect(takeUntil(input, (value) => value > 3)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [] for [1, 2, 3, -4, 5], (value) => value === 1", () => {
    const input = [1, 2, 3, -4, 5];
    
    expect(takeUntil(input, (value) => value === 1)).to.be.deep.equal([]);
  });

  it("should return [] for [], (value) => value === 1", () => {
    const input = [];
    
    expect(takeUntil(input, (value) => value === 1)).to.be.deep.equal([]);
  });
});