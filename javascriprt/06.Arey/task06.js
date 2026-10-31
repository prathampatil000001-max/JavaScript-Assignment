// # 6. Looping Through Arrays
// 01]What are the two types of loops demonstrated in the notes for iterating through an array?
// 02]In a standard for loop, what condition is typically used to ensure the loop stops before going out of bounds? (i < ...)
// 03]In the while loop example, where is the increment step (i++) placed relative to the array access statement?
// 04]Write a for loop structure that prints every element of an array named students.
// 05]What happens if your loop condition incorrectly uses <= instead of < alongside students.length when accessing elements?
// 06]Write a for...of loop that prints every element of an array named subject.
// 07]What is the main advantage of using a for...of loop over a traditional for loop when you only need the values (and not the indices)?
// 08]Given const colors = ["Red", "Blue", "Green"];, what will the following code output?
// for (const color of colors) {
//     console.log(color, indexOf(color);
// }
// 1. Two types of loops used to iterate through an array:
// for loop and while loop.

// 2. Standard for loop condition:
// i < students.length

// 3. In a while loop, the increment step (i++) is placed
// after the array access statement.

// 4. For loop to print every element of students.

var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 5. If we use <= instead of <, the loop runs one extra time
// and prints undefined.

// 6. for...of loop to print every element of subject.

var subject = ["Maths", "Science", "English"];

for (const sub of subject) {
    console.log(sub);
}

// 7. Advantage of for...of loop:
// It is simpler and directly gives values without using indexes.

// 8. Given colors array:

const colors = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color, colors.indexOf(color));
}
// # 7. Adding Elements to Arrays
// 01]Which method is used to add an element at the end of an array?
// 02]Which method is used to add an element at the beginning of an array?
// 03]Given let nums = [1, 2, 3];, write the code to add 4 at the end using the appropriate method. What will console.log(nums); show after that?
// 04]Continuing from the previous question, write the code to add 0 at the beginning. What will the final array look like?
// 05]True or False: push() and unshift() both modify the original array (they are mutating methods).
// 1. push() method is used to add an element at the end of an array.

// 2. unshift() method is used to add an element at the beginning of an array.

// 3. Create an array.
let nums = [1, 2, 3];

// Add 4 at the end.
nums.push(4);

console.log(nums);

// 4. Add 0 at the beginning.
nums.unshift(0);

console.log(nums);

// 5. True or False:
// push() and unshift() both modify the original array.
// Answer: True.
