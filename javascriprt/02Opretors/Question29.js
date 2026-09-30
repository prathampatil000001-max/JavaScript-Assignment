// 08 Part D: Logical Operators
// 1. Logical AND &&
// Write a JavaScript program for each:

// 01 Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.
// 02  A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.
// 03  A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.
// 04  A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.
// 05 Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.


// # Problem 1: Lift capacity safety check
people_in_lift = 7
max_capacity = 8
print("Is it safe to add one more?", (people_in_lift + 1) <= max_capacity)

// # Problem 2: File size upload check
file_size = 5
max_allowed_size = 5
print("Is upload allowed?", file_size <= max_allowed_size)

// # Problem 3: Junior age classification check
participant_age = 12
max_junior_age = 12
print("Do they qualify as a junior?", participant_age <= max_junior_age)

// # Problem 4: Data usage tier check
data_used = 9.5
data_limit = 10
print("Is the user within the limit?", data_used <= data_limit)

// # Problem 5: Class enrollment capacity check
class_strength = 40
max_class_capacity = 40
print("Is the class at a valid capacity?", class_strength <= max_class_capacity)
