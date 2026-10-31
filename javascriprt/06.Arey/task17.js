// #16-C Mini Assignment 3: Movie Rating Analyzer
// Given Input:

// const movies = [
//     ["Inception", [9, 8, 9, 10, 8]],
//     ["Avatar", [7, 8, 7, 6, 8]],
//     ["Interstellar", [10, 9, 9, 10, 9]],
//     ["Joker", [8, 7, 8, 9, 8]]
// ];
// Tasks:

// For each movie, calculate the average rating.
// Print in this format:
// Movie: Inception
// Ratings: 9 8 9 10 8
// Average Rating: 8.8
// Verdict: Excellent
// Verdict rules:
// Average ≥ 9 → Excellent
// Average ≥ 7 and < 9 → Good
// Average < 7 → Average
// Bonus: Find and print the movie with the highest average rating.
const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];

let highestAverage = 0;
let bestMovie = "";

// Loop through each movie
for (let i = 0; i < movies.length; i++) {

    const movieName = movies[i][0];
    const ratings = movies[i][1];

    let total = 0;

    // Calculate total ratings
    for (let j = 0; j < ratings.length; j++) {
        total += ratings[j];
    }

    // Calculate average rating
    const average = total / ratings.length;

    // Check movie verdict
    let verdict;

    if (average >= 9) {
        verdict = "Excellent";
    } else if (average >= 7) {
        verdict = "Good";
    } else {
        verdict = "Average";
    }

    // Print movie details
    console.log("Movie:", movieName);
    console.log("Ratings:", ratings.join(" "));
    console.log("Average Rating:", average);
    console.log("Verdict:", verdict);
    console.log("----------------------");

    // Find movie with highest average
    if (average > highestAverage) {
        highestAverage = average;
        bestMovie = movieName;
    }
}

// Print highest-rated movie
console.log("Highest Rated Movie:", bestMovie);
console.log("Highest Average Rating:", highestAverage);