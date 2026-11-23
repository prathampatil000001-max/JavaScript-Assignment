// Assignment: Array Methods in JavaScript
// 1. push()

// 01]Create an array of 3 colors. Use push() to add two more colors and print the final array.
// 02]Start with an empty array. Use push() three times to add the numbers 5, 10 and 15. Print the array.
// 03]Create an array ["Pen", "Book"]. Add "Eraser" and "Scale" using a single push() call and print the result.
// 04]Where does push() add the new element(s) in the array?
// 05]Does push() change the original array? Explain in one sentence

// 01. Create an array of 3 colors and add two more colors using push().
let colors = ["Red", "Blue", "Green"];
colors.push("Yellow", "Pink");
console.log(colors);

// 02. Start with an empty array and add 5, 10 and 15 using push().
let numbers = [];
numbers.push(5);
numbers.push(10);
numbers.push(15);
console.log(numbers);

// 03. Add "Eraser" and "Scale" using a single push() call.
let items = ["Pen", "Book"];
items.push("Eraser", "Scale");
console.log(items);

// 04. Where does push() add new elements?
// Answer: push() adds new elements at the end of the array.

// 05. Does push() change the original array?
// Answer: Yes, push() modifies the original array by adding new elements.