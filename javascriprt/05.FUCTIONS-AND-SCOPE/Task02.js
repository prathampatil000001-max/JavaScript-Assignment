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

// // Additionally, create a separate function compareAverages(avg1, avg2) that returns which average is higher (or if they are equal).
// 1. Conceptual Understanding
// What is a function in JavaScript?

// A function in JavaScript is a reusable block of code designed to perform a specific task. It executes when it is called.

// Four advantages of using functions:

// Code reusability: Write code once and use it multiple times.

// Reduces repetition: Avoid writing the same code again and again.

// Easy debugging: Makes errors easier to find and fix.

// Better organization: Divides a large program into smaller, manageable parts.

// 2. Function Declaration

// javascript
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
// Explanation: Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code.

// Program:


// javascript
greet();

function greet() {
    console.log("Hello, welcome to JavaScript!");
}
// Output:


// text
// Hello, welcome to JavaScript!
// Why does it work?

// JavaScript processes function declarations before executing the code, so the function can be called before its definition appears in the program.

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
// Parameters: Variables listed in the function definition.

// Arguments: Actual values passed to the function when it is called.

// Example:


// javascript
function multiply(x, y) {
    return x * y;
}

console.log(multiply(12, 5));
// Identification:

// Parameters: x and y

// Arguments: 12 and 5

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

javascript
function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));
// Output:


// text
// 91.2
// 8. Function Without Return
// If a function does not contain a return statement, it returns undefined by default.

// Program:


// javascript
function displayMessage() {
    console.log("Hello, JavaScript!");
}

let result = displayMessage();

console.log(result);
// Output:


// text
// Hello, JavaScript!
// undefined
// The first line is printed by the function. The second output is undefined because the function does not return a value.

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
// A function declaration can be called before its definition because of hoisting. A function expression assigned to a const or let variable cannot be called before the variable is initialized.

// b) Student marks message

// javascript
function studentMarks(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentMarks("Aarav", 85));
console.log(studentMarks("Diya", 92));
// Output:


// text
// Student Aarav has scored 85 marks.
// Student Diya has scored 92 marks.
// 11. Function Scope
// a) Local scope vs global scope
// Local scope: A variable declared inside a function is accessible only within that function.

// Global scope: A variable declared outside a function can generally be accessed throughout the program, including inside functions.

// b) Program demonstrating scope

// javascript
let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

function displayCourse() {
    console.log("Course:", course);
}

displayAge();
displayCourse();

console.log(age);
// Output before the error:


// text
// Age: 20
// Course: JavaScript
// The last statement produces a ReferenceError because age is a local variable and cannot be accessed outside displayAge().

// Note: The error occurs at the last line, after the first two outputs have been printed.

// 12. Combining Multiple Concepts

// javascript
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
           " with average " + average;
}

console.log(analyzeStudent("Rahul", 80, 85, 90));
console.log(analyzeStudent("Priya", 75, 88, 92));
// Output:


// text
// Rahul scored total 255 with average 85
// Priya scored total 255 with average 85
// 13. Nested Functions
// a) What is a nested function?
// A nested function is a function defined inside another function. The inner function can be called from the outer function and can access variables from its enclosing scope.

// b) Student report program

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

console.log(generateReport("Rahul", 80, 75, 90));
console.log("--------------------");
console.log(generateReport("Priya", 30, 35, 25));
// Output:


// text
// Student Name: Rahul
// Total Marks: 245
// Average: 81.67
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

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(40, 60));
console.log(maxOfTwo(25, 40));
console.log(fullName("Rahul", "Sharma"));
// Output:


// text
// 60
// 50
// 40
// Rahul Sharma
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
console.log(fahrenheitToCelsius(212));
// Output:


// text
// 32
// 212
// 0
// 100
// 19. Mixed Advanced Question
// a) Can a function expression be called before it is defined?
// Generally, no. A function expression assigned to a const or let variable cannot be called before the variable is initialized.

// Example:


// javascript
// This would produce a ReferenceError:
// sayHello();

const sayHello = function() {
    console.log("Hello!");
};

sayHello();
// Output:


// text
// Hello!
// The function must be initialized before it is called. Unlike function declarations, function expressions are not hoisted in a way that allows them to be called before initialization.

// b) Nested function example

// javascript
function calculateRectangle(length, width) {
    function area() {
        return length * width;
    }

    return "Area of rectangle: " + area();
}

console.log(calculateRectangle(10, 5));
// Output:


// text
// Area of rectangle: 50
// The outer function calls the inner area() function and returns the calculated area.

// 20. Challenge Question – Combining Everything

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

console.log(processStudent("Rahul", 80, 85, 90));
console.log("--------------------");

console.log(processStudent("Priya", 70, 75, 80));
console.log("--------------------");

console.log(processStudent("Amit", 25, 30, 35));
console.log("--------------------");

console.log(compareAverages(85, 75));
console.log(compareAverages(60, 60));
console.log(compareAverages(65, 80));
// Output:


// text
// Student Name: Rahul
// Total Marks: 255
// Average: 85.00
// Result: Pass
// --------------------
// Student Name: Priya
// Total Marks: 225
// Average: 75.00
// Result: Pass
// --------------------
// Student Name: Amit
// Total Marks: 90
// Average: 30.00
// Result: Fail
// --------------------
// First average is higher.
// Both averages are equal.
// Second average is higher.