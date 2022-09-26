const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,4,2,5]), 3);
assertEqual(head([5,6,7]), 5);

