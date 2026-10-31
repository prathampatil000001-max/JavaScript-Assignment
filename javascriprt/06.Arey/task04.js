// # 4. Updating Values
// How do you update a specific value inside an existing JavaScript array?
// Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?
// After executing the update from the previous question, what will console.log(marks); output?
// True or False: You need to use a special built-in method like update() to change an array element's value.
// Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?

// 1. To update a value in an array, use its index.

// 2. Create an array named marks.
var marks = [80, 75, 90];

// 3. Change the second element (index 1) from 75 to 95.
marks[1] = 95;

// 4. Display the updated array.
console.log(marks);

// 5. True or False:
// You need a special built-in method like update() to change an array element.
// Answer: False.

// 6. Updating a value at an index outside the array's bounds.
marks[5] = 100;

// Display the array after adding a value at index 5.
console.log(marks);