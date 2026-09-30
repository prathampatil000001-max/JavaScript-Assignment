// switch Statement – 10 Questions
// 01]Write a program that takes a month number (1–12) and prints the number of days in that month using switch
// (Hint: Consider 28/29 for February as 28 for simplicity).

// 02]Write a program that checks a character and prints whether it is a vowel or consonant using switch.

// 03]Create a program that takes a number from 1 to 4 and prints the season using multiple cases together:
// 1 or 2 → Winter
// 3 or 4 → Summer

// 04]Write a program using switch (true) to assign class based on marks:
// ≥ 75 → Distinction
// ≥ 60 → 1st class
// ≥ 50 → 2nd class
// ≥ 35 → 3rd class
// below 35 → Failed

// 05]Create a nested switch program:
// First take a role (“admin” or “user”).
// If role is “admin”, then take an action (“create”, “edit”, “delete”) and print the corresponding message.
// If role is “user”, print “Limited Access”.

//06] Predict and explain the output of the following code. Then correct it so that only one message is printed:

// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//   case "mango":
//     console.log("Mango is yellow");
//   case "banana":
//     console.log("Banana is yellow");
//   default:
//     console.log("Unknown fruit");
// }
// 07]Write a program that takes a value which can be either a number or a string (0, "0", false, null, undefined) and uses switch to correctly identify each one. Explain why some values may not match as expected.

// 08]Create a tricky calculator using switch that supports these operations:
// +, -, *, /, %, and also ** (exponentiation).
// Handle division by zero properly inside the corresponding case.

// 09]Write a program using switch that takes a date (day number of the month) and prints:
// “Beginning of the month” (1–10)
// “Middle of the month” (11–20)
// “End of the month” (21–31)
// Use switch (true) technique for range checking.

// 10]Create a multi-level nested switch program for an online food ordering system:
// First select Category: "veg" or "nonveg".
// Then select Item based on category.
// Finally select Size: "half" or "full" and print the final order summary with price.


// -------Q01--------////
let month = 2;

switch (month) {
  case 1:
    console.log("31 days");
    break;
  case 2:
    console.log("28 days");
    break;
  case 3:
    console.log("31 days");
    break;
  case 4:
    console.log("30 days");
    break;
  case 5:
    console.log("31 days");
    break;
  case 6:
    console.log("30 days");
    break;
  case 7:
    console.log("31 days");
    break;
  case 8:
    console.log("31 days");
    break;
  case 9:
    console.log("30 days");
    break;
  case 10:
    console.log("31 days");
    break;
  case 11:
    console.log("30 days");
    break;
  case 12:
    console.log("31 days");
    break;
  default:
    console.log("Invalid month");
}
// -------Q02--------////
let ch = "e";

switch (ch.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;

  default:
    console.log("Consonant");
}
// -------Q03--------////
let season = 3;

switch (season) {
  case 1:
  case 2:
    console.log("Winter");
    break;

  case 3:
  case 4:
    console.log("Summer");
    break;

  default:
    console.log("Invalid number");
}
// -------Q04--------////
let marks = 68;

switch (true) {
  case marks >= 75:
    console.log("Distinction");
    break;

  case marks >= 60:
    console.log("1st class");
    break;

  case marks >= 50:
    console.log("2nd class");
    break;

  case marks >= 35:
    console.log("3rd class");
    break;

  default:
    console.log("Failed");
}
// -------Q05--------////
let role = "admin";
let action = "create";

switch (role) {
  case "admin":
    switch (action) {
      case "create":
        console.log("Admin can create");
        break;

      case "edit":
        console.log("Admin can edit");
        break;

      case "delete":
        console.log("Admin can delete");
        break;

      default:
        console.log("Invalid action");
    }
    break;

  case "user":
    console.log("Limited Access");
    break;

  default:
    console.log("Invalid role");
}
// -------Q06--------////

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;

  case "mango":
    console.log("Mango is yellow");
    break;

  case "banana":
    console.log("Banana is yellow");
    break;

  default:
    console.log("Unknown fruit");
    break;
}
// -------Q07--------////
let value = "0";

switch (value) {
  case 0:
    console.log("This is the number 0");
    break;

  case "0":
    console.log('This is the string "0"');
    break;

  case false:
    console.log("This is false");
    break;

  case null:
    console.log("This is null");
    break;

  case undefined:
    console.log("This is undefined");
    break;

  default:
    console.log("Unknown value");
}
// -------Q08--------////
let num1 = 10;
let num2 = 3;
let operator = "**";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log(num1 / num2);
    }
    break;

  case "%":
    if (num2 === 0) {
      console.log("Cannot find remainder with zero");
    } else {
      console.log(num1 % num2);
    }
    break;

  case "**":
    console.log(num1 ** num2);
    break;

  default:
    console.log("Invalid operator");
}
// -------Q09-------////
let day = 18;

switch (true) {
  case day >= 1 && day <= 10:
    console.log("Beginning of the month");
    break;

  case day >= 11 && day <= 20:
    console.log("Middle of the month");
    break;

  case day >= 21 && day <= 31:
    console.log("End of the month");
    break;

  default:
    console.log("Invalid day");
}
// -------Q10-------////
let category = "veg";
let item = "paneer";
let size = "full";

let price;

switch (category) {
  case "veg":

    switch (item) {
      case "paneer":

        switch (size) {
          case "half":
            price = 120;
            break;

          case "full":
            price = 220;
            break;

          default:
            console.log("Invalid size");
        }

        break;

      case "veg-biryani":

        switch (size) {
          case "half":
            price = 100;
            break;

          case "full":
            price = 180;
            break;

          default:
            console.log("Invalid size");
        }

        break;

      default:
        console.log("Invalid veg item");
    }

    break;

  case "nonveg":

    switch (item) {
      case "chicken":

        switch (size) {
          case "half":
            price = 180;
            break;

          case "full":
            price = 320;
            break;

          default:
            console.log("Invalid size");
        }

        break;

      case "chicken-biryani":

        switch (size) {
          case "half":
            price = 150;
            break;

          case "full":
            price = 280;
            break;

          default:
            console.log("Invalid size");
        }

        break;

      default:
        console.log("Invalid nonveg item");
    }

    break;

  default:
    console.log("Invalid category");
}






