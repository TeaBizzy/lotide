const { expect } = require("chai");
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue()", () => {
  it("should return \"a\" for {a: 1, b: 2, c: 3}, 1", () => {
    const input = {a: 1, b: 2, c: 3};
    
    expect(findKeyByValue(input, 1)).to.be.equal("a");
  });

  it("should return \"drama\" for {sci_fi: \"The Expanse\", comedy: \"Brooklyn Nine-Nine\", drama: \"The Wire\"}, \"The Wire\"", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    expect(findKeyByValue(input, "The Wire")).to.be.equal("drama");
  });

  it("should return \"drama\" for {sci_fi: \"The Expanse\", comedy: \"Brooklyn Nine-Nine\", drama: \"The Wire\"}, \"The Wire\"", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    expect(findKeyByValue(input, "The Wire")).to.be.equal("drama");
  });

  it("should return undefined for {sci_fi: \"The Expanse\", comedy: \"Brooklyn Nine-Nine\", drama: \"The Wire\"}, \"That 70's Show\"", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    expect(findKeyByValue(input, "That 70's Show")).to.be.undefined;
  });

  it("should return undefined for {sci_fi: \"The Expanse\", comedy: \"Brooklyn Nine-Nine\", drama: \"The Wire\"}, undefined", () => {
    const input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    expect(findKeyByValue(input, undefined)).to.be.undefined;
  });
});