# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stefantalbot/lotide`

**Require it:**

`const _ = require('@stefantalbot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Counts the number of times each character appears in the given string. Returns an object.

* `countOnly(array, filterObject)`: Counts the number of times each value appears in the array but only if the filterObject has a matching key set to true. Returns an object.

* `eqArrays(arrayA, arrayB)`: Compares arrayA to arrayB. Works with nested arrays. Returns a boolean.

* `eqObjects(objectA, objectB)`: Compares objectA to objectB. Works with deep objects. Returns a boolean.

* `findKey(object, callback)`: Returns a string of the key if the callback returns true. The current key is passed as an argument to the call back function.

* `findKeyByValue(object, value)`: Searches an object for the first key to match the given value. Returns the key as a string.

* `flatten(array)`: Takes an array with nested arrays, and extracts the values to be within the same array. Returns an array.

* `head(array)`: Extracts the value from index 0 of the given array. Returns typeof value.

* `letterPositions(string)`: Calculates the index positions for each character of the given string. Returns an object containing the characters as keys and their index positions as values.

* `map(array, callback)`: Modifies each value of the array using the given call back. The value is passed as an argument to the callback. Returns a new array with the modified values.

* `middle(array)`: Finds the middle value of the given array. If the array has an even length, it will return 2 values. If the array has 2 or less values it will return an empty array. Returns an array with the middle index/indicies.

* `tail(array)`: Returns a new array containing every value of the given array except for the value at index 0.

* `takeUntil(array, callback)`: Stores the values from the given array starting at value 0, stopping when the callback returns true. Returns the new array.

* `without(array, )`: Modifies each value of the array using the given call back. The value is passed as an argument to the callback. Returns a new array with the modified values.

* `assertEqual(valueA, valueB)`: **NOTE**: Replaced by mocha and chai. Logs a colorful assertion based on the outcome of comparing valueA to valueB.

* `assertArraysEqual(arrayA, arrayB)`: **NOTE**: Replaced by mocha and chai. Logs a colorful assertion based on the outcome of comparing arrayA to arrayB.

* `assertObjectsEqual(objectA, objectB)`: **NOTE**: Replaced by mocha and chai. Logs a colorful assertion based on the outcome of comparing objectA to objectB.