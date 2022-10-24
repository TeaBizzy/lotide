const { expect } = require("chai");
const countLetters = require("../countLetters");


describe("#countLetters()", () => {
  it("should return {T: 1, e: 1, s: 1, t: 1, i: 1, n: 1, g: 1} for \"Testing\"", () => {
    const input = "Testing";
    const output = {T: 1, e: 1, s: 1, t: 1, i: 1, n: 1, g: 1};

    expect(countLetters(input)).to.be.deep.equal(output);
  });

  it("should return {b: 1, e: 2} for \"bee\"", () => {
    const input = "bee";
    const output = {b: 1, e: 2};

    expect(countLetters(input)).to.be.deep.equal(output);
  });

  it("should return {} for undefined", () => {
    const input = undefined;
    const output = {};

    expect(countLetters(input)).to.be.deep.equal(output);
  });

  it("should return {} for \"\"", () => {
    const input = "";
    const output = {};

    expect(countLetters(input)).to.be.deep.equal(output);
  });
});