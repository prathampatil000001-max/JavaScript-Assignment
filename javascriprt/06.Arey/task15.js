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

// 01]Loop through the cart.
// 02]For each item, calculate the total price (Price × Quantity).
// 03]Print in this format:
// Product: Laptop
// Price: 45000
// Quantity: 1
// Item Total: 45000
// 04]At the end, print the Grand Total of the entire cart.
// 05]Bonus: Apply 10% discount if Grand Total > 50000 and show the final payable amount.

const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];

let grandTotal = 0;

// Loop through the cart
for (let i = 0; i < cart.length; i++) {

    const productName = cart[i][0];
    const price = cart[i][1];
    const quantity = cart[i][2];

    // Calculate item total
    const itemTotal = price * quantity;

    // Add item total to grand total
    grandTotal += itemTotal;

    // Print product details
    console.log("Product:", productName);
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    console.log("Item Total:", itemTotal);
    console.log("----------------------");
}

// Print grand total
console.log("Grand Total:", grandTotal);

// Apply 10% discount if grand total is greater than 50000
let discount = 0;

if (grandTotal > 50000) {
    discount = grandTotal * 10 / 100;
}

let finalAmount = grandTotal - discount;

// Print final bill
console.log("Discount:", discount);
console.log("Final Payable Amount:", finalAmount);
