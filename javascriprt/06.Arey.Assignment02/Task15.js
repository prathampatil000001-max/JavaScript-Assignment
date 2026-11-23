// # 15. Multiple Choice Questions
// Q1. What will be the output of the following code?

// const arr = [5, 10, 15, 20];
// console.log(arr[arr.length - 1]);
// a) 5
// b) 10
// c) 15
// d) 20

// Q2. Which of the following correctly adds an element at the beginning of an array?

// const arr = [10, 20, 30];
// a) arr.push(5)
// b) arr.pop(5)
// c) arr.unshift(5)
// d) arr.shift(5)

// Q3. What does the following code print?

// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Orange"));
// a) 0
// b) 2
// c) -1
// d) undefined

// Q4. Which statement about JavaScript arrays is true?
// a) Arrays can only store numbers
// b) Arrays are always sorted
// c) Arrays can store mixed data types
// d) Array indexes start from 1

// Q5. What is the output of this code?

// let nums = [1, 2, 3];
// nums.pop();
// nums.push(4);
// console.log(nums);
// a) [1, 2, 3, 4]
// b) [1, 2, 4]
// c) [2, 3, 4]
// d) [1, 2, 3]

// Q6. In the following 2D array, what does matrix[2][1] return?

// const matrix = [
//     [10, 20],
//     [30, 40],
//     [50, 60]
// ];
// a) 30
// b) 40
// c) 50
// d) 60

// Q7. What will be printed?

// const data = [10, "Hello", false];
// console.log(typeof data[1]);
// a) number
// b) string
// c) boolean
// d) object

// #16-A Mini Assignment 1: Shopping Cart Calculator
// Given Input:

// const cart = [
//     ["Laptop", 45000, 1],
//     ["Mouse", 800, 2],
//     ["Keyboard", 1500, 1],
//     ["Headphones", 2500, 1]
// ];
// (Format: [Product Name, Price, Quantity])

// Tasks:

// Loop through the cart.
// For each item, calculate the total price (Price × Quantity).
// Print in this format:
// Product: Laptop
// Price: 45000
// Quantity: 1
// Item Total: 45000
// At the end, print the Grand Total of the entire cart.
// Bonus: Apply 10% discount if Grand Total > 50000 and show the final payable amount.
// 

// 15. Multiple Choice Questions – Answers
// Question

// Correct Answer

// Explanation

// Q1

// d) 20

// arr.length - 1 accesses the last element.

// Q2

// c) arr.unshift(5)

// unshift() adds an element at the beginning.

// Q3

// c) -1

// indexOf() returns -1 if the element is not found.

// Q4

// c) Arrays can store mixed data types

// JavaScript arrays can contain numbers, strings, booleans, etc.

// Q5

// b) [1, 2, 4]

// pop() removes 3, and push(4) adds 4.

// Q6

// d) 60

// matrix[2] is [50, 60], and index [1] is 60.

// Q7

// b) string

// typeof "Hello" returns "string".


// const cart = [
//     ["Laptop", 45000, 1],
//     ["Mouse", 800, 2],
//     ["Keyboard", 1500, 1],
//     ["Headphones", 2500, 1]
// ];

let grandTotal = 0;

// Loop through the cart
for (let i = 0; i < cart.length; i++) {

    let product = cart[i][0];
    let price = cart[i][1];
    let quantity = cart[i][2];

    // Calculate item total
    let itemTotal = price * quantity;

    // Add item total to grand total
    grandTotal += itemTotal;

    // Print product details
    console.log("Product:", product);
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    console.log("Item Total:", itemTotal);
    console.log("----------------------");
}

// Print grand total
console.log("Grand Total:", grandTotal);

// Apply 10% discount if grand total > 50000
let discount = 0;

if (grandTotal > 50000) {
    discount = grandTotal * 0.10;
}

let finalPayable = grandTotal - discount;

console.log("Discount:", discount);
console.log("Final Payable Amount:", finalPayable);
