// Assignment : JavaScript Functions
// 1. Conceptual Understanding
// What is a function in JavaScript? List any four advantages of using functions in a program.

// 2. Function Declaration
// Write a function declaration named greetStudent that takes one parameter name and returns the string:
// "Hello [name], welcome to CodingGita!"
// Call the function with two different names and display the output.

// 3. Hoisting
// Explain what is meant by hoisting in the context of function declarations.
// Write a code example that shows a function declaration being called before it is defined, and explain why it works.

// 4. Function Expression
// Convert the following function declaration into a function expression and store it in a variable named calculateAverage:

// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// Then call the function with the values 80, 90 and 70 and print the result.

// 5. Parameters vs Arguments
// Differentiate between parameters and arguments with the help of a suitable example.
// Identify the parameters and arguments in the following code:

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(12, 5));
// 6. Return Statement
// Write a function named isEven that takes one number as input and returns true if the number is even, otherwise returns false.
// Test the function with the numbers 24 and 17.

// 7. Multiple Parameters
// Create a function declaration named findPercentage that accepts two parameters: obtainedMarks and totalMarks.
// The function should return the percentage.
// Call the function with the values 456 and 500 and display the result.

// 8. Function Without Return
// What value does a function return if it does not contain a return statement?
// Write a short program that demonstrates this behaviour.

// 9. Practical Application – Simple Interest
// Write a function expression named calculateSimpleInterest that takes three parameters: principal, rate and time.
// The function should calculate and return simple interest using the formula:
// SI = (principal × rate × time) / 100
// Call the function with principal = 10000, rate = 5 and time = 2 and print the result.

// 10. Mixed Concept Question
// a) State one major difference between a function declaration and a function expression.
// b) Write a function (either declaration or expression) that takes a student’s name and marks as parameters and returns a message in this format:
// "Student [name] has scored [marks] marks."
// Call the function with any two different students.

// 11. Function Scope
// a) Explain the difference between local scope and global scope with respect to functions.
// b) Write a program that demonstrates the following:

// A function displayAge that declares a local variable age = 20 and prints it.
// Try printing age outside the function and observe/explain the error.
// Declare a global variable course = "JavaScript" and write a function that prints the value of course.
// 12. Combining Multiple Concepts
// Write a function declaration named analyzeStudent that takes four parameters: name, m1, m2, and m3.
// Inside the function:

// Calculate the total marks
// Calculate the average
// Return a readable string in this format:
// "[name] scored total [total] with average [average]"
// Call the function with at least two different students and display the results.

// 13. Nested Functions
// a) What is a nested function?
// b) Write a function studentReport that takes a student’s name and three subject marks.
// Inside it, create an inner function total that calculates the sum of the three marks.
// The outer function should return a string like:
// "[name] total marks: [total]"

// Call studentReport with one set of values and print the result.

// 14. Practical – Report Card Generator
// Write a function named generateReport that takes four parameters: name, m1, m2, m3.
// The function should calculate and return a well-formatted report containing:

// Student name
// Total marks
// Average
// Result ("Pass" if average ≥ 40, otherwise "Fail")
// Call the function with two different students and display both reports.

// 15. Practical – Multiple Utility Functions
// Create the following functions (you may use either declarations or expressions):

// sumOfThree(a, b, c) → returns the sum of three numbers
// averageOfTwo(x, y) → returns the average of two numbers
// maxOfTwo(a, b) → returns the larger of two numbers
// fullName(first, last) → returns the full name
// Test each function with suitable values and print the results.

// 16. Practical – Grade Calculator
// Write a function expression named calculateGrade that takes a student’s percentage as input and returns the grade according to the following rules:

// ≥ 90 → "A+"
// ≥ 80 → "A"
// ≥ 70 → "B"
// ≥ 60 → "C"
// ≥ 40 → "D"
// < 40 → "F"
// Test the function with percentages: 95, 82, 67, 45, and 32.

// 17. Practical – Shopping Discount
// Write a function declaration named calculateFinalPrice that takes two parameters: price and discountPercent.
// The function should return the final price after applying the discount.
// Formula: finalPrice = price - (price × discountPercent / 100)

// Call the function with:

// price = 2500, discount = 15
// price = 1200, discount = 10
// 18. Practical – Temperature Converter
// Write two function expressions:

// celsiusToFahrenheit(c) → converts Celsius to Fahrenheit
// Formula: (c × 9/5) + 32
// fahrenheitToCelsius(f) → converts Fahrenheit to Celsius
// Formula: (f - 32) × 5/9
// Test both functions with at least two values each.

// 19. Mixed Advanced Question
// a) Can a function expression be called before it is defined? Why or why not?
// b) Write a nested function example of your own (different from question 13) that demonstrates an outer function calling an inner function and returning a useful result.

// 20. Challenge Question (Combining Everything)
// Write a complete program that does the following:

// Create a function processStudent(name, m1, m2, m3) that:

// Calculates total and average using an inner function
// Determines Pass/Fail
// Returns a complete report string
// Call this function for three different students and print their reports.

// Additionally, create a separate function compareAverages(avg1, avg2) that returns which average is higher (or if they are equal).

// 1. Conceptual Understanding
// A function in JavaScript is a reusable block of code designed to perform a specific task. It can accept inputs (parameters), process them, and return an output.

// Four advantages of functions:

// Code reusability: Write code once and use it multiple times.

// Reduces repetition: Avoid writing the same code repeatedly.

// Easy debugging: Errors can be identified and fixed more easily.

// Modularity: Divide a large program into smaller, manageable parts.

// 2. Function Declaration

function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}

console.log(greetStudent("Rahul"));
console.log(greetStudent("Priya"));
// Output:

// text
// Hello Rahul, welcome to CodingGita!
// Hello Priya, welcome to CodingGita!
// 3. Hoisting
// Hoisting is JavaScript's behavior of making function declarations available before their position in the code.

// javascript
greet();

function greet() {
    console.log("Hello, JavaScript!");
}
// Output:

// text
// Hello, JavaScript!
// Explanation: A function declaration can be called before it appears in the code because JavaScript processes function declarations before executing the code.

// 4. Function Expression
// javascript
const calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
};

console.log(calculateAverage(80, 90, 70));
// Output:

// text
// 80
// 5. Parameters vs Arguments
// Parameters: Variables listed in a function definition.

// Arguments: Actual values passed to a function when it is called.

// Example:

// javascript
function multiply(x, y) {
    return x * y;
}

console.log(multiply(12, 5));
// Parameters: x, y

// Arguments: 12, 5

// Output:

// text
// 60
// 6. Return Statement
// javascript
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(24));
console.log(isEven(17));
// Output:

// text
// true
// false
// 7. Multiple Parameters
// javascript
function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));
// Output:

// text
// 91.2
// 8. Function Without Return
// If a function does not contain a return statement, it returns undefined by default.

// javascript
function displayMessage() {
    console.log("Welcome to JavaScript!");
}

let result = displayMessage();

console.log(result);
// Output:

// text
// Welcome to JavaScript!
// undefined
// 9. Practical Application – Simple Interest
// javascript
const calculateSimpleInterest = function(principal, rate, time) {
    return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));
// Output:

// text
// 1000
// 10. Mixed Concept Question
// a) Difference between function declaration and function expression
// A function declaration can generally be called before its definition because of hoisting. A function expression assigned to a const or let variable cannot be called before the variable is initialized.

// b) Student marks message
// javascript
function studentMarks(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentMarks("Aarav", 85));
console.log(studentMarks("Sneha", 92));
// Output:

// text
// Student Aarav has scored 85 marks.
// Student Sneha has scored 92 marks.
// 11. Function Scope
// a) Local scope vs global scope
// Local scope: A variable declared inside a function can generally be accessed only within that function.

// Global scope: A variable declared outside a function can generally be accessed throughout the relevant script or module scope, including inside functions.

// b) Program demonstrating scope
// javascript
let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

// function displayCourse() {
//     console.log("Course:", course);
// }

// displayAge();
// displayCourse();

// console.log(age);
// Output before the error:

// text
// Age: 20
// Course: JavaScript
// The final line produces a ReferenceError because age is a local variable inside displayAge() and cannot be accessed outside that function.

// 12. Combining Multiple Concepts
// javascript
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
           " with average " + average;
}

console.log(analyzeStudent("Rahul", 80, 90, 70));
console.log(analyzeStudent("Priya", 75, 85, 95));
// Output:

// text
// Rahul scored total 240 with average 80
// Priya scored total 255 with average 85
// 13. Nested Functions
// a) What is a nested function?
// A nested function is a function defined inside another function. The inner function can access variables from its containing function.

// b) Student report using a nested function
// javascript
function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }

    return name + " total marks: " + total();
}

console.log(studentReport("Aarav", 80, 85, 90));
// Output:

// text
// Aarav total marks: 255
// 14. Practical – Report Card Generator
// javascript
function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return "Student Name: " + name +
           "\nTotal Marks: " + total +
           "\nAverage: " + average.toFixed(2) +
           "\nResult: " + result;
}

console.log(generateReport("Rahul", 80, 75, 85));
console.log("--------------------");
console.log(generateReport("Priya", 30, 35, 25));
// Output:

// text
// Student Name: Rahul
// Total Marks: 240
// Average: 80.00
// Result: Pass
// --------------------
// Student Name: Priya
// Total Marks: 90
// Average: 30.00
// Result: Fail
// 15. Practical – Multiple Utility Functions
// javascript
function sumOfThree(a, b, c) {
    return a + b + c;
}

function averageOfTwo(x, y) {
    return (x + y) / 2;
}

function maxOfTwo(a, b) {
    return a > b ? a : b;
}

function fullName(first, last) {
    return first + " " + last;
}

console.log("Sum:", sumOfThree(10, 20, 30));
console.log("Average:", averageOfTwo(40, 60));
console.log("Maximum:", maxOfTwo(15, 25));
console.log("Full Name:", fullName("Rahul", "Sharma"));
// Output:

// text
// Sum: 60
// Average: 50
// Maximum: 25
// Full Name: Rahul Sharma
// 16. Practical – Grade Calculator
// javascript
const calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));
// Output:

// text
// A+
// A
// C
// D
// F
// 17. Practical – Shopping Discount
// javascript
function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));
// Output:

// text
// 2125
// 1080
// 18. Practical – Temperature Converter
// javascript
const celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(98.6));
// Output:

// text
// 32
// 212
// 0
// 37
// 19. Mixed Advanced Question
// a) Can a function expression be called before it is defined?
// No, not when it is assigned to a const or let variable. The variable must be initialized before it can be used.


// console.log(add(5, 3)); // ReferenceError

const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
// Output:

// text
// 8
// The first line is commented out because executing it before initialization would produce a ReferenceError.

// b) Example of a nested function
// javascript
function calculateBill(price, quantity) {
    function getTotal() {
        return price * quantity;
    }

    return "Total bill: Rs. " + getTotal();
}

console.log(calculateBill(200, 3));
// Output:

// text
// Total bill: Rs. 600
// Here, getTotal() is the inner function, and calculateBill() calls it to calculate and return the bill.

// 20. Challenge Question – Complete Program
// javascript
function processStudent(name, m1, m2, m3) {
    function calculateTotal() {
        return m1 + m2 + m3;
    }

    let total = calculateTotal();
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return "Student Name: " + name +
           "\nTotal Marks: " + total +
           "\nAverage: " + average.toFixed(2) +
           "\nResult: " + result;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher.";
    } else if (avg2 > avg1) {
        return "Second average is higher.";
    } else {
        return "Both averages are equal.";
    }
}

// Process three students
console.log(processStudent("Rahul", 80, 90, 70));
console.log("--------------------");

console.log(processStudent("Priya", 95, 85, 90));
console.log("--------------------");

console.log(processStudent("Amit", 30, 35, 25));
console.log("--------------------");

// Compare two averages
console.log(compareAverages(80, 90));
console.log(compareAverages(85, 75));
console.log(compareAverages(80, 80));
// Output:

// text
// Student Name: Rahul
// Total Marks: 240
// Average: 80.00
// Result: Pass
// --------------------
// Student Name: Priya
// Total Marks: 270
// Average: 90.00
// Result: Pass
// --------------------
// Student Name: Amit
// Total Marks: 90
// Average: 30.00
// Result: Fail
// --------------------
// Second average is higher.
// First average is higher.
// Both averages are equal.

// 15. Mini Assignment
// Create a function studentInfo() that:

// Defines a local variable name
// Defines a local variable course
// Defines an inner function display()
// The inner function prints both variables
// Call the inner function from the outer function
// This exercise shows function scope, nested scope, and scope chain.

function studentInfo() {
    let name = "Rahul";
    let course = "JavaScript";

    function display() {
        console.log("Name: " + name);
        console.log("Course: " + course);
    }

    display();
}

studentInfo();

if (true) {
    var x = 30;
}
console.log(x);

for (let i = 1; i <= 10; i++) {
  console.log("4 × " + i + " = " + (4 * i));
}
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

let Str = "Hello";
for (let i = 0; i < Str.length; i++) {
  console.log(Str[i]);
}
// Print numbers from 1 to 10 using a for loop.
for (let i = 2; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers from 2 to 20

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Print the multiplication table of 9.

for (let i = 1; i <= 10; i++) {
    console.log("9 x " + i + " = " + (9 * i));
}

// Find the sum of first 10 natural numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
};

console.log("Sum =", sum);

// Find the multiplication (product) of first 10 natural numbers
let product = 1;

for (let i = 1; i <= 10; i++) {
    product = product * i;
}

console.log("Product =", product);

// Print numbers 1 to 5 in a single line.
let output = "";

for (let i = 1; i <= 5; i++) {
    output = output + i + " ";
}

console.log(output);

// Print * five times
// in different lines
// in the same line
for (let i = 1; i <= 5; i++) {
    console.log("*");
}

// Given an array [10, 20, 30, 40, 50], print all elements using a for loop.

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Given a string "CodingGita", print each character using a for loop.
let str = "CodingGita";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    console.log("Stopped at 13");
    break;
  }
  console.log(i);
};

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;   // skip even numbers
  console.log(i);
}
// Output: 1 3 5 7 9

// Print numbers from 1 to 20 but stop completely when you reach 13 (break).
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        break;
    }
    console.log(i);
}
// Print numbers from 1 to 15 but skip all multiples of 3 (continue).
for (let i = 1; i <= 15; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// Print only odd numbers from 1 to 20 using continue.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Print numbers from 1 to 30. Stop the loop as soon as you find a number that is divisible by both 3 and 7.

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        break;
    }
    console.log(i);
};
// Print numbers from 1 to 25, but skip all numbers that are perfect squares (1, 4, 9, 16, 25).
for (let i = 1; i <= 25; i++) {
    if ([1, 4, 9, 16, 25].includes(i)) {
        continue;
    }
    console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

const Arr = [10, 20, 30, 40, 50];
for (let i = Arr.length - 1; i >= 0; i--) {
  console.log(Arr[i]);
}

for (let i = 10; i >= 1; i--) {
  console.log("7 × " + i + " = " + (7 * i));
}

if (true) {
    var x = 30;
}
console.log(x);

var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);

console.log(score);
var score = 40;

if (true) {
    var x = 20;
}
console.log(x); // 20