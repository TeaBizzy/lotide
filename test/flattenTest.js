const { expect } = require("chai");
const flatten = require("../flatten");

describe("#flatten()", () => {
  it("should return [1, 2, 3], [1, [2], 3]", () => {
    const input = [1, [2], 3];
    
    expect(flatten(input)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [1, 2, 3], [1, 2, 3]", () => {
    const input = [1, 2, 3];
    
    expect(flatten(input)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [1, 2, 3], [1, [[[2]]], 3]", () => {
    const input = [1, [[[2]]], 3];
    
    expect(flatten(input)).to.be.deep.equal([1, 2, 3]);
  });

  it("should return [1], [1, [[[]]], []]", () => {
    const input = [1, [[[]]], []];
    
    expect(flatten(input)).to.be.deep.equal([1]);
  });


  it("should return [], [[[[]]], []]", () => {
    const input = [[[[]]], []];
    
    expect(flatten(input)).to.be.deep.equal([]);
  });
});