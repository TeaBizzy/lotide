const { expect } = require("chai");
const eqObjects = require("../eqObjects");

describe("#eqArrays()", () => {
  it("should return true for {a: 1, b: 2}, {a: 1, b: 2}", () => {
    const input = {a: 1, b: 2};
    
    expect(eqObjects(input, input)).to.be.deep.equal(true);
  });

  it("should return false for {a: 1, b: 2}, {a: 1, b: 2, c: 3}", () => {
    const input1 = {a: 1, b: 2};
    const input2 = {a: 1, b: 2, c: 3};

    expect(eqObjects(input1, input2)).to.be.deep.equal(false);
  });

  it("should return false for {a: 1, b: {c: 3}, {a: 1, b: 2, c: 3}", () => {
    const input1 = {a: 1, b: {c: 3}};
    const input2 = {a: 1, b: 2, c: 3};

    expect(eqObjects(input1, input2)).to.be.deep.equal(false);
  });

  it("should return true for {a: {b: true} c: {d: false}, {a: {b: true} c: {d: false}", () => {
    const input = {a: {b: true}, c: {d: false}};

    expect(eqObjects(input, input)).to.be.deep.equal(true);
  });

  it("should return true for {}, {}", () => {
    const input = {};

    expect(eqObjects(input, input)).to.be.deep.equal(true);
  });

  it("should return false for {a: {}}, {}", () => {
    const input1 = {a: {}};
    const input2 = {};

    expect(eqObjects(input1, input2)).to.be.deep.equal(false);
  });
});