const { expect } = require("chai");
const tail = require("../tail");

describe("#tail()", () => {
  it("should return [\"Lighthouse\", \"Labs\", \"Foo\", \"Bar\"] for [\"Ballons\", \"Lighthouse\", \"Labs\", \"Foo\", \"Bar\"]", () => {
    const input = ["Ballons", "Lighthouse", "Labs", "Foo", "Bar"];
    const output = ["Lighthouse", "Labs", "Foo", "Bar"];

    expect(tail(input)).to.be.deep.equal(output);
  });

  it("should return [] for [\"Lighthouse\"]", () => {
    const input = ["Lighthouse"];
    const output = [];

    expect(tail(input)).to.be.deep.equal(output);
  });

  it("should return [] for []", () => {
    const input = [];
    const output = [];

    expect(tail(input)).to.be.deep.equal(output);
  });
});