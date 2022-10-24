const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODE
const words = ["Ballons", "Lighthouse", "Labs", "Foo", "Bar"];
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(words)[0], "Lighthouse");