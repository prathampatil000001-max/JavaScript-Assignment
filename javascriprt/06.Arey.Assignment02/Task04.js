// # 4. Updating Values
// 01]How do you update a specific value inside an existing JavaScript array?
// 02]Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?
// 03]After executing the update from the previous question, what will console.log(marks); output?
// 04]True or False: You need to use a special built-in method like update() to change an array element's value.
// 05]Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?

// 01. How do you update a specific value inside an existing JavaScript array?
// Answer: By using the array name and index number.

// 02. Change the second element (75) to 95.
var marks = [80, 75, 90];
marks[1] = 95;

// 03. What is the output after updating?
console.log(marks);
// Output: [80, 95, 90]

// 04. True or False: You need a special built-in method like update() to change an array element.
// Answer: False. We can directly update an element using its index.

// 05. Can you update a value at an index outside the bounds of the array?
// Answer: Yes, JavaScript allows it. Empty positions are filled with empty slots (holes).

var numbers = [10, 20, 30];
numbers[5] = 60;
console.log(numbers);
// Output: [10, 20, 30, empty × 2, 60]