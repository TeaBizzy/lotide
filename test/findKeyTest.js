const { expect } = require("chai");
const findKey = require("../findKey");

describe("#findKey()", () => {
  it("should return \"a\" for {a: true, b: false}, (key) => {key === true}.", () => {
    const inputObj = {a: true, b: false};
    
    expect(findKey(inputObj, key => key === true)).to.be.equal("a");
  });

  it("should return \"b\" for {a: 5, b: 1}, (key) => {key < 3}.", () => {
    const inputObj = {a: 5, b: 1};
    
    expect(findKey(inputObj, key => key < 3)).to.be.equal("b");
  });

  it("should return undefined for {a: 5, b: 1}, (key) => {key < 1}.", () => {
    const inputObj = {a: 5, b: 1};
    
    expect(findKey(inputObj, key => key < 1)).to.be.equal(undefined);
  });
});