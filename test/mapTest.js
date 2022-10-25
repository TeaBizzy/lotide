const { expect } = require("chai");
const map = require("../map");

describe("#map()", () => {
  it("should return [2, 4, 8] for [1, 2, 4]", () => {
    const input = [1, 2, 4];
    
    expect(map(input, (value) => value * 2)).to.be.deep.equal([2, 4, 8]);
  });

  it("should return [5, 13, 17] for [{x: 3, y: 4}, {x: 12, y: 5}, {x: 8, y: 15}], (value) => Math.sqrt(Math.pow(value.x, 2) + Math.pow(value.y, 2))", () => {
    const input = [
      {x: 3, y: 4},
      {x: 12, y: 5},
      {x: 8, y: 15}
    ];
    
    expect(map(input, (value) => Math.sqrt(Math.pow(value.x, 2) + Math.pow(value.y, 2)))).to.be.deep.equal([5, 13, 17]);
  });

  it("should return [] for [], (value) => value + 1", () => {
    const input = [];
    
    expect(map(input, (value) => value + 1)).to.be.deep.equal([]);
  });
});