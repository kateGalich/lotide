const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result1 = tail(["Labs"]);
assertEqual(result1.toString(), [].toString());

const result2 = tail([]);
assertEqual(result2.toString(), [].toString());