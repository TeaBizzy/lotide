const { expect } = require("chai");
const countOnly = require("../countOnly");


describe("#countOnly()", () => {
  it("should return {true: 5} for [true, true, true, true, true] with a filterObject of {true: true}", () => {
    const inputArray = [true, true, true, true, true];
    const inputFilter = {true: true};
    const output = {true: 5};

    expect(countOnly(inputArray, inputFilter)).to.be.deep.equal(output);
  });

  it("should return {Feng: 2, Karl: 1} for [\"Karl\", \"Salima\", \"Feng\", \"Feng\"] with a filterObject of {Feng: true, Karl: true}", () => {
    const inputArray = ["Karl", "Salima", "Feng", "Feng"];
    const inputFilter = {Feng: true, Karl: true};
    const output = {Feng: 2, Karl: 1};

    expect(countOnly(inputArray, inputFilter)).to.be.deep.equal(output);
  });

  it("should return {} for [1, 1] with a filterObject of {}", () => {
    const inputArray = [1, 1];
    const inputFilter = {};
    const output = {};

    expect(countOnly(inputArray, inputFilter)).to.be.deep.equal(output);
  });

  it("should return {} for [] with a filterObject of {}", () => {
    const inputArray = [];
    const inputFilter = {};
    const output = {};

    expect(countOnly(inputArray, inputFilter)).to.be.deep.equal(output);
  });

  it("should return {} for undefined with a filterObject of {}", () => {
    const inputArray = [];
    const inputFilter = {};
    const output = {};

    expect(countOnly(inputArray, inputFilter)).to.be.deep.equal(output);
  });
});