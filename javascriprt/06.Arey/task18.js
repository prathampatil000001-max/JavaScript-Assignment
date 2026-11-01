// #16-D Mini Assignment 4: Temperature of the Week
// Given Input:

// const temperatures = [
//     ["Monday", 32],
//     ["Tuesday", 35],
//     ["Wednesday", 30],
//     ["Thursday", 28],
//     ["Friday", 33],
//     ["Saturday", 36],
//     ["Sunday", 31]
// ];
// Tasks:

// Print the temperature of each day.
// Find and print:
// Highest temperature + day
// Lowest temperature + day
// Average temperature of the week
// Print a warning if any day has temperature ≥ 35:
// Heat Alert on <Day>
const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

let highestTemp = temperatures[0][1];
let lowestTemp = temperatures[0][1];

let highestDay = temperatures[0][0];
let lowestDay = temperatures[0][0];

let total = 0;

// Loop through each day
for (let i = 0; i < temperatures.length; i++) {

    const day = temperatures[i][0];
    const temp = temperatures[i][1];

    // Print temperature of each day
    console.log(day + ": " + temp + "°C");

    // Calculate total temperature
    total += temp;

    // Find highest temperature
    if (temp > highestTemp) {
        highestTemp = temp;
        highestDay = day;
    }

    // Find lowest temperature
    if (temp < lowestTemp) {
        lowestTemp = temp;
        lowestDay = day;
    }

    // Check heat alert
    if (temp >= 35) {
        console.log("Heat Alert on " + day);
    }
}

// Calculate average temperature
let average = total / temperatures.length;

// Print final results
console.log("----------------------");

console.log("Highest Temperature:", highestTemp + "°C");
console.log("Highest Temperature Day:", highestDay);

console.log("Lowest Temperature:", lowestTemp + "°C");
console.log("Lowest Temperature Day:", lowestDay);

console.log("Average Temperature:", average.toFixed(2) + "°C");