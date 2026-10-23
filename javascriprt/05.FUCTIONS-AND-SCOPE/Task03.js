// // JavaScript Assignment: Scope and Hoisting
// // Section 1: What Is Scope? (5 Questions)
// // Q1.
// // Consider the following code:

// // var city = "Surat";
// // function display() {
// //     var country = "India";
// //     console.log(city);
// //     console.log(country);
// // }
// // display();
// // Answer the following:

// // Which variable is declared in the global scope?
// // Which variable is declared inside the function?
// // Can both variables be accessed inside "display()"?
// // Q2.
// // Predict the output:

// // var price = 500;
// // function calculate() {
// //     var tax = 50;
// //     console.log(price + tax);
// // }
// // calculate();
// // console.log(price);
// // Q3.
// // Identify the scope of each variable:

// // var college = "ABC College";
// // function student() {
// //     var name = "Rahul";
// //     var age = 20;
// // }
// // function teacher() {
// //     var subject = "JavaScript";
// // }
// // Classify "college", "name", "age", and "subject" as global or function-scoped variables.

// // Q4.
// // What will happen when you execute this code? Explain why.

// // function first() {
// //     var number = 100;
// // }
// // function second() {
// //     console.log(number);
// // }
// // first();
// // second();
// // Q5.
// // Write a JavaScript program that:

// // Declares one variable in the global scope.
// // Declares another variable inside a function.
// // Prints both variables inside the function.
// // Prints the global variable outside the function.
// // Section 2: Global Scope (5 Questions)
// // Q6.
// // Predict the output:

// // var game = "Cricket";
// // function play() {
// //     console.log("I like " + game);
// // }
// // play();
// // console.log(game);
// // Q7.
// // What will be the output?

// // var language = "English";
// // function showLanguage() {
// //     console.log(language);
// // }
// // function changeLanguage() {
// //     language = "Gujarati";
// // }
// // showLanguage();
// // changeLanguage();
// // showLanguage();
// // console.log(language);
// // Explain why the output changes.

// // Q8.
// // Find the error, if any:

// // function displayMarks() {
// //     console.log(marks);
// // }
// // var marks = 75;
// // displayMarks();
// // Will this code produce an error? Explain your answer.

// // Q9.
// // Predict the output:

// // var color = "Red";
// // function showColor() {
// //     var message = "Favorite color: ";
// //     console.log(message + color);
// // }
// // showColor();
// // console.log(color);
// // console.log(message);
// // Which statement causes an error, and why?

// // Q10.
// // Write a program that declares a global variable named "school" with the value "Sunrise School".

// // Create two functions:

// // "showSchool()" should print the school name.
// // "updateSchool()" should change the global variable to "Green Valley School".
// // Call both functions in an appropriate order and print the final value of "school".

// // Section 3: Function Scope (5 Questions)
// // Q11.
// // Predict the output:

// // function calculateTotal() {
// //     var first = 100;
// //     var second = 200;
// //     console.log(first + second);
// // }
// // calculateTotal();
// // console.log(first);
// // Explain the behavior of the last statement.

// // Q12.
// // Find and explain the error:

// // function employee() {
// //     var salary = 30000;
// // }
// // employee();
// // console.log(salary);
// // Q13.
// // What will be the output?

// // var number = 15;
// // function test() {
// //     var number = 25;
// //     console.log(number);
// // }
// // test();
// // console.log(number);
// // Why doesn't the value printed inside the function change the global variable?

// // Q14.
// // Consider this code:

// // function calculate() {
// //     var result = 40;
// //     result = result + 10;
// //     console.log(result);
// // }
// // calculate();
// // calculate();
// // Answer the following:

// // What is the output?
// // Is a new local variable created each time the function is called?
// // Does the local variable remain accessible after the function finishes executing?
// // Q15.
// // Write a function named "calculateArea()" that:

// // Declares a local variable "length" with the value 8.
// // Declares a local variable "width" with the value 4.
// // Calculates and prints the area of a rectangle.
// // Does not make either variable accessible outside the function.
// // Section 4: No Block Scope with "var" (5 Questions)
// // Q16.
// // Predict the output:

// // if (10 > 5) {
// //     var result = "Success";
// // }
// // console.log(result);
// // Explain why "result" is accessible outside the "if" block.

// // Q17.
// // What will be printed?

// // var number = 1;
// // if (true) {
// //     var number = 2;
// // }
// // console.log(number);
// // Why does the output differ from what you might expect if the block had its own scope?

// // Q18.
// // Predict the output:

// // var message = "Start";
// // {
// //     var message = "End";
// // }
// // console.log(message);
// // Does the standalone block create a separate scope for "var"?

// // Q19.
// // Find the output and explain the variable's scope:

// // if (false) {
// //     var result = 100;
// // }
// // console.log(result);
// // Does the condition being "false" prevent the "var" declaration from being hoisted?

// // Q20.
// // Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

// // if (true) {
// //     var secret = "Hidden";
// // }
// // console.log(secret);
// // Explain why your solution works.

// // Section 5: Block Scope with Loops (5 Questions)
// // Q21.
// // Predict the complete output:

// // for (var number = 2; number <= 6; number += 2) {
// //     console.log(number);
// // }
// // console.log("Final:", number);
// // Explain why "number" can be accessed after the loop.

// // Q22.
// // What will be printed?

// // var count = 10;
// // for (var count = 1; count <= 3; count++) {
// //     console.log(count);
// // }
// // console.log("Count:", count);
// // Explain what happens to the original value of "count".

// // Q23.
// // Predict the output:

// // var i = 5;
// // while (i > 2) {
// //     console.log(i);
// //     i--;
// // }
// // console.log("After loop:", i);
// // Is "i" accessible after the loop? Why?

// // Q24.
// // Find the error, if any:

// // for (var item = 1; item <= 3; item++) {
// //     console.log("Item:", item);
// // }
// // console.log("Last item:", item);
// // Does the final statement cause an error? What value does "item" contain?

// // Q25.
// // Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

// // for (var step = 1; step <= 4; step++) {
// //     console.log(step);
// // }
// // console.log(step);
// // Explain the difference between your solution and the original code.

// // Section 6: Function Scope Inside Loops (5 Questions)
// // Q26.
// // Predict the output:

// // function calculate() {
// //     for (var number = 1; number <= 3; number++) {
// //         console.log(number * 10);
// //     }
// //     console.log("Final:", number);
// // }
// // calculate();
// // Explain why "number" is accessible after the loop but not outside the function.

// // Q27.
// // Identify which statements cause errors:

// // function student() {
// //     for (var marks = 60; marks <= 80; marks += 10) {
// //         console.log(marks);
// //     }
// //     console.log(marks);
// // }
// // student();
// // console.log(marks);
// // Explain your answer for each occurrence of "marks".

// // Q28.
// // Predict the output:

// // function test() {
// //     var value = 5;
// //     while (value < 8) {
// //         console.log(value);
// //         value++;
// //     }
// //     console.log("Final value:", value);
// // }
// // test();
// // How many times does the loop execute?

// // Q29.
// // Find and explain the error:

// // function calculate() {
// //     for (var i = 1; i <= 2; i++) {
// //         console.log(i);
// //     }
// // }
// // console.log(i);
// // calculate();
// // Why does the order of these statements matter?

// // Q30.
// // Write a function named "printNumbers()" that:

// // Uses a "for" loop to print numbers from 1 to 5.
// // Declares the loop variable using "var".
// // Prints the loop variable again after the loop, inside the function.
// // Demonstrates that the loop variable cannot be accessed outside the function.
// // Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

// // Section 7: Hoisting with "var" (5 Questions)
// // Q31.
// // Predict the output:

// // console.log(score);
// // var score = 90;
// // console.log(score);
// // Explain why the first statement does not produce a "ReferenceError".

// // Q32.
// // What will be the output?

// // var a = 10;
// // function test() {
// //     console.log(a);
// //     var a = 20;
// //     console.log(a);
// // }
// // test();
// // Why doesn't the first "console.log()" print the global value of "a"?

// // Q33.
// // Identify which statements produce "undefined" and explain why:

// // console.log(first);
// // console.log(second);
// // var first = 100;
// // var second = 200;
// // console.log(first);
// // console.log(second);
// // Q34.
// // Predict the output:

// // function calculate() {
// //     console.log(total);
// //     var total = 50;
// //     console.log(total);
// // }
// // calculate();
// // Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

// // Q35.
// // Find and explain the issue:

// // var price = 100;
// // function showPrice() {
// //     console.log(price);
// //     var price = 500;
// // }
// // showPrice();
// // console.log(price);
// // Answer the following:

// // What does the first "console.log()" inside the function print?
// // What does the final "console.log()" print?
// // How does hoisting affect the local variable "price"?
// // Section 8: Function Declaration Hoisting (5 Questions)
// // Q36.
// // Predict the output:

// // sayHello();
// // function sayHello() {
// //     console.log("Hello from CodingGita");
// // }
// // Explain why this works even though the function is called before it is written.

// // Q37.
// // What will be the output? Explain the difference from a normal var variable.

// // display();
// // function display() {
// //     console.log("Function is hoisted completely");
// // }
// // Q38.
// // Find and explain the issue (if any):

// // greet();
// // var greet = function() {
// //     console.log("Hi");
// // };
// // Why does this behave differently from a function declaration?

// // Q39.
// // Predict the output:

// // console.log(typeof myFunc);
// // function myFunc() {
// //     return "I am hoisted";
// // }
// // console.log(myFunc());
// // Q40.
// // Write a small program that:

// // Calls a function before its declaration.
// // The function prints a message using a global variable.
// // Demonstrates that the entire function (name + body) is available due to hoisting.
// // Section 9: Scope Chain (5 Questions)
// // Q41.
// // Predict the output and explain the lookup process:

// // var institute = "CodingGita";
// // function department() {
// //     var dept = "CSE";
// //     function batch() {
// //         var year = 2025;
// //         console.log(year);
// //         console.log(dept);
// //         console.log(institute);
// //     }
// //     batch();
// // }
// // department();
// // Q42.
// // What will happen when this code runs? Explain using the scope chain.

// // var globalVar = "I am global";
// // function outer() {
// //     var outerVar = "I am outer";
// //     function inner() {
// //         console.log(globalVar);
// //         console.log(outerVar);
// //         console.log(innerVar); // this line
// //     }
// //     inner();
// // }
// // outer();
// // Q43.
// // Identify which variables are accessible inside deep() and which are not:

// // var a = 1;
// // function level1() {
// //     var b = 2;
// //     function level2() {
// //         var c = 3;
// //         function deep() {
// //             console.log(a, b, c);
// //         }
// //         deep();
// //     }
// //     level2();
// // }
// // level1();
// // Q44.
// // Predict the output:

// // var x = "global";
// // function first() {
// //     var x = "first";
// //     function second() {
// //         console.log(x);
// //     }
// //     second();
// // }
// // first();
// // console.log(x);
// // Explain why the value of x changes depending on the location of console.log.

// // Q45.
// // Write a nested function structure (at least 3 levels) that prints:

// // A variable from the innermost function
// // A variable from the middle function
// // A variable from the outermost function / global scope
// // Demonstrate the scope chain clearly.
// // Section 10: Variable Shadowing (5 Questions)
// // Q46.
// // Predict the output:

// // var score = 50;
// // function test() {
// //     var score = 90;
// //     console.log(score);
// // }
// // test();
// // console.log(score);
// // Explain what “shadowing” means in this example.

// // Q47.
// // What will be printed?

// // var name = "Global Name";
// // function show() {
// //     var name = "Local Name";
// //     console.log(name);
// // }
// // show();
// // console.log(name);
// // Does the local variable permanently change the global one? Why or why not?

// // Q48.
// // Find the output and explain:

// // var value = 10;
// // function update() {
// //     value = 20;          // no var
// //     console.log(value);
// // }
// // update();
// // console.log(value);
// // Compare this with the previous questions (where var was used inside the function).

// // Q49.
// // Predict the complete output:

// // var color = "Blue";
// // function changeColor() {
// //     var color = "Red";
// //     console.log("Inside:", color);
// // }
// // changeColor();
// // console.log("Outside:", color);
// // Q50.
// // Write a program that demonstrates variable shadowing:

// // Declare a global variable marks = 70.
// // Inside a function, declare another variable marks = 95.
// // Print both values (inside and outside the function) so the difference is clear.
// // Section 11: Nested Functions (5 Questions)
// // Q51.
// // Predict the output:

// // function outer() {
// //     var teacher = "Kartik Sir";
// //     function inner() {
// //         var student = "Jenil";
// //         console.log(student);
// //         console.log(teacher);
// //     }
// //     inner();
// // }
// // outer();
// // Can you access teacher or student outside outer()? Explain.

// // Q52.
// // What will this code print? Explain the accessibility of each variable.

// // function parent() {
// //     var a = "Parent";
// //     function child() {
// //         var b = "Child";
// //         function grandchild() {
// //             var c = "Grandchild";
// //             console.log(a);
// //             console.log(b);
// //             console.log(c);
// //         }
// //         grandchild();
// //     }
// //     child();
// // }
// // parent();
// // Q53.
// // Find the error(s):

// // function outer() {
// //     var secret = "Hidden";
// //     function inner() {
// //         console.log(secret);
// //     }
// // }
// // inner();
// // outer();
// // Why does the order and placement of the function call matter?

// // Q54.
// // Predict the output:

// // function createMessage() {
// //     var greeting = "Hello";
// //     function show() {
// //         console.log(greeting + " students");
// //     }
// //     return show;
// // }
// // var messageFunc = createMessage();
// // messageFunc();
// // Explain how the inner function still has access to greeting.

// // Q55.
// // Write a function named studentInfo() that:

// // Declares a local variable name
// // Declares a local variable course
// // Contains an inner function display() that prints both variables
// // Calls the inner function from the outer function
// // (This is the mini-assignment style question from the notes.)
// // Section 12: Common Errors with var (5 Questions)
// // Q56.
// // What is the problem in this code?

// // function test() {
// //     x = 100; // missing var
// // }
// // test();
// // console.log(x);
// // Explain the unintended side effect.

// // Q57.
// // Predict the output and explain the misconception:

// // if (true) {
// //     var x = 20;
// // }
// // console.log(x);
// // Why do beginners often expect an error here?

// // Q58.
// // What happens here?

// // console.log(a);
// // var a = 10;
// // Explain why there is no ReferenceError and what value is printed.

// // Q59.
// // Find the issue:

// // var x = 10;
// // var x = 20;
// // console.log(x);
// // Is this allowed with var? Why can it become confusing?

// // Q60.
// // Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:

// // function calculate() {
// //     total = 0;
// //     for (var i = 1; i <= 5; i++) {
// //         total = total + i;
// //     }
// //     console.log(total);
// // }
// // calculate();
// // console.log(total); // currently works, but should not
// // Submission Instructions
// // Write your answers in a notebook or a JavaScript file.
// // For output-based questions, write the complete output.
// // For error-based questions, clearly identify the error and explain its cause.
// // For coding questions, write the complete working program.
// // For explanation questions, write a short answer in your own words.
// // Try predicting the output before running the code.
















// // JavaScript Assignment: Scope and Hoisting
// // Answers: Section 1 to Section 6 (Q1–Q30)
// // Section 1: What Is Scope?
// // Q1. Global scope and function scope
// // The global variable is city, with the value "Surat".

// // The function-scoped variable is country, with the value "India".

// // Yes, both variables can be accessed inside display(). The function can access the global variable city and its local variable country.

// // Q2. Predict the output
// // Output:

// // text
// // 550
// // 500
// // Explanation: price is a global variable, and tax is a local variable inside calculate(). Their sum is 550. The global variable price remains 500.

// // Q3. Identify the scope of each variable
// // college: Global scope.

// // name: Function scope inside student().

// // age: Function scope inside student().

// // subject: Function scope inside teacher().

// // Explanation: Variables declared using var inside a function are accessible within that function, not outside it.

// // Q4. What will happen?
// // Output:

// // text
// // ReferenceError: number is not defined
// // Explanation: The variable number is declared inside first(). It cannot be accessed inside second() because it is local to first().

// // Q5. Write a JavaScript program that demonstrates scope
// // javascript
// // var city = "Surat";

// // function display() {
// //     var country = "India";

// //     console.log(city);
// //     console.log(country);
// // }

// // display();
// // console.log(city);
// // Output:

// // text
// // Surat
// // India
// // Surat
// // Explanation: The global variable city can be accessed inside and outside the function. The local variable country can only be accessed inside display().

// // Section 2: Global Scope
// // Q6. Predict the output
// // Output:

// // text
// // I like Cricket
// // Cricket
// // Explanation: The global variable game is accessible inside play() and outside the function.

// // Q7. What will be the output?
// // Output:

// // text
// // English
// // Gujarati
// // Gujarati
// // Explanation: Initially, language contains "English". The function changeLanguage() changes the global variable to "Gujarati". Therefore, the second function call and the final statement print "Gujarati".

// // Q8. Find the error, if any
// // Output:

// // text
// // 75
// // Explanation: There is no error. The function displayMarks() is called after the global variable marks has been assigned the value 75.

// // Q9. Predict the output
// // Output before the error:

// // text
// // Favorite color: Red
// // Red
// // Error:

// // text
// // ReferenceError: message is not defined
// // Explanation: The statement console.log(message) causes the error because message is declared inside showColor(). It cannot be accessed outside that function. The global variable color can be accessed anywhere in this example.

// // Q10. Program to update a global variable
// // javascript
// // var school = "Sunrise School";

// // function showSchool() {
// //     console.log(school);
// // }

// // function updateSchool() {
// //     school = "Green Valley School";
// // }

// // showSchool();
// // updateSchool();
// // showSchool();

// // console.log("Final school:", school);
// // Output:

// // text
// // Sunrise School
// // Green Valley School
// // Final school: Green Valley School
// // Explanation: The updateSchool() function changes the global variable, so its new value can be accessed by other functions.

// // Section 3: Function Scope
// // Q11. Predict the output
// // Output before the error:

// // text
// // 300
// // Error:

// // text
// // ReferenceError: first is not defined
// // Explanation: The variable first is declared inside calculateTotal(). It cannot be accessed outside that function.

// // Q12. Find and explain the error
// // Error:

// // text
// // ReferenceError: salary is not defined
// // Explanation: The variable salary is local to employee(). Calling the function does not make the local variable accessible outside it.

// // Q13. What will be the output?
// // Output:

// // text
// // 25
// // 15
// // Explanation: The local variable number inside test() shadows the global variable with the same name. The local variable has the value 25,

// // Q14. Predict the output
// // Output:

// // text
// // 50
// // 50
// // Answers:

// // The output is 50 on both calls.

// // Yes, a new local variable result is created for each function call.

// // No, the local variable is not accessible outside the function after it finishes executing.

// // Explanation: Each call initializes result to 40 and adds 10.

// // Q15. Function to calculate the area of a rectangle
// // javascript
// // function calculateArea() {
// //     var length = 8;
// //     var width = 4;

// //     var area = length * width;

// //     console.log("Area:", area);
// // }

// // calculateArea();
// // Output:

// // text
// // Area: 32
// // Explanation: The variables length, width, and area are local to calculateArea().

// // Section 4: No Block Scope with var
// // Q16. Predict the output
// // Output:

// // text
// // Success
// // Explanation: var is function-scoped, not block-scoped. Therefore, the variable result remains accessible outside the if block.

// // Q17. What will be printed?
// // Output:

// // text
// // 2
// // Explanation: Both declarations of number refer to the same variable because var does not create a separate block scope. Its value changes from 1 to 2.

// // Q18. Predict the output
// // Output:

// // text
// // ChatGPT is AI and can make mistakes.

// // Q19. Find the output
// // Output:

// // text
// // undefined
// // Explanation: The declaration of result is hoisted, but the assignment to 100 does not execute because the condition is false. Therefore, result remains undefined.

// // Q20. Rewrite the code using block scope
// // javascript
// // if (true) {
// //     let secret = "Hidden";
// // }

// // console.log(secret);
// // Output before the error: No output.

// // Error:

// // text
// // ReferenceError: secret is not defined
// // ChatGPT is AI and can make mistakes.


// // Section 5: Block Scope with Loops
// // Q21. Predict the complete output
// // Code:

// // javascript
// // for (var number = 2; number <= 6; number += 2) {
// //     console.log(number);
// // }
// // console.log("Final:", number);
// // Output:

// // text
// // 2
// // 4
// // 6
// // Final: 8
// // Explanation: The loop prints 2, 4, and 6. After the last iteration, number becomes 8, so the loop stops. Because var is not block-scoped, number remains accessible after the loop.

// // Q22. What will be printed?
// // Code:

// // javascript
// // var count = 10;
// // for (var count = 1; count <= 3; count++) {
// //     console.log(count);
// // }
// // console.log("Count:", count);
// // Output:

// // text
// // 1
// // 2
// // 3
// // Count: 4
// // Explanation: The loop uses the same count variable because both declarations use var in the same scope. The original value 10 is replaced by 1. After the loop finishes, count is 4.

// // Q23. Predict the output
// // Code:

// // javascript
// // var i = 5;
// // while (i > 2) {
// //     console.log(i);
// //     i--;
// // }
// // console.log("After loop:", i);
// // Output:

// // text
// // 5
// // 4
// // 3
// // After loop: 2
// // Explanation: The loop prints 5, 4, and 3. Then i becomes 2, and the condition i > 2 becomes false.

// // Yes, i is accessible after the loop because it was declared outside the loop.

// // Q24. Find the error, if any
// // Code:

// // javascript
// // for (var item = 1; item <= 3; item++) {
// //     console.log("Item:", item);
// // }
// // console.log("Last item:", item);
// // Output:

// // text
// // Item: 1
// // Item: 2
// // Item: 3
// // Last item: 4
// // Explanation: There is no error. Since item is declared using var, it remains accessible after the loop. Its final value is 4 because the increment happens before the next condition check.

// // Q25. Rewrite the loop using block scope
// // Corrected code:

// // javascript
// // for (let step = 1; step <= 4; step++) {
// //     console.log(step);
// // }
// // console.log(step);
// // Output before the error:

// // text
// // 1
// // 2
// // 3
// // 4
// // Error:

// // text
// // ReferenceError: step is not defined
// // Explanation: The let keyword creates a block-scoped variable. Therefore, step is accessible inside the loop but not outside it.

// // Unlike var, let prevents the loop variable from being accessed outside the loop.

// // Section 6: Function Scope Inside Loops
// // Q26. Predict the output
// // Code:

// // javascript
// // function calculate() {
// //     for (var number = 1; number <= 3; number++) {
// //         console.log(number * 10);
// //     }
// //     console.log("Final:", number);
// // }
// // calculate();
// // Output:

// // text
// // 10
// // 20
// // 30
// // Final: 4
// // Explanation: The loop prints 10, 20, and 30. After the loop ends, number is 4.

// // The variable number is accessible after the loop because var has function scope. However, it cannot be accessed outside calculate() because it is declared inside that function.

// // Q27. Identify which statements cause errors
// // Code:

// // javascript
// // function student() {
// //     for (var marks = 60; marks <= 80; marks += 10) {
// //         console.log(marks);
// //     }
// //     console.log(marks);
// // }
// // student();
// // console.log(marks);
// // Output before the error:

// // text
// // 60
// // 70
// // 80
// // 90
// // 90
// // Error:

// // text
// // ReferenceError: marks is not defined
// // Explanation:

// // The loop initializes marks to 60.

// // The loop prints 60, 70, and 80.

// // After the final increment, marks becomes 90, so the loop stops.

// // The console.log(marks) inside student() prints 90 because marks is function-scoped.

// // The final `console.log(m

// // ChatGPT is AI and can make mistakes.




// // No file chosenNo file chosenNo file chosen
// // Chat with ChatGPT
// // ds

// // Q28. Predict the output
// // Code:

// // javascript
// // function test() {
// //     var value = 5;
// //     while (value < 8) {
// //         console.log(value);
// //         value++;
// //     }
// //     console.log("Final value:", value);
// // }
// // test();
// // Output:

// // text
// // 5
// // 6
// // 7
// // Final value: 8
// // Explanation: The loop executes 3 times, printing 5, 6, and 7. When value becomes 8, the condition
// // value < 8 becomes false, and the loop ends.

// // Q29. Find and explain the error
// // Code:

// // javascript
// // function calculate() {
// //     for (var i = 1; i <= 2; i++) {
// //         console.log(i);
// //     }
// // }
// // console.log(i);
// // calculate();
// // Error:

// // text
// // ReferenceError: i is not defined
// // Explanation: The variable i is declared inside calculate(), so it is accessible only within that function. The first console.log(i) attempts to access it outside the function.

// // Because the error occurs before calculate() is

// // is called, the function does not execute during normal script execution.

// // Q30. Write the printNumbers() function
// // Code:


// // javascript
// // function printNumbers() {
// //     for (var i = 1; i <= 5; i++) {
// //         console.log(i);
// //     }

// //     console.log("After loop:", i);
// // }

// // printNumbers();

// // console.log(i);
// // Output before the error:


// // text
// // 1
// // 2
// // 3
// // 4
// // 5
// // After loop: 6
// // Error:


// // text
// // ReferenceError: i is not defined
// // Explanation: The loop prints numbers from 1 to 5. After the loop, i becomes 6, which is printed inside the function.

// // The final console.log(i) causes a ReferenceError because i is declared inside printNumbers() and cannot be accessed outside the function.


// // Section 7: Hoisting with var
// // Q31. Predict the output
// // Code:

// // javascript
// // console.log(score);
// // var score = 90;
// // console.log(score);
// // Output:

// // text
// // undefined
// // 90
// // Explanation: JavaScript hoists the declaration of score to the top of its scope. The variable exists when the first console.log() runs, but its value has not yet been assigned, so it prints undefined.

// // Q32. What will be the output?
// // Code:

// // javascript
// // var a = 10;

// // function test() {
// //     console.log(a);
// //     var a = 20;
// //     console.log(a);
// // }

// // test();
// // Output:

// // text
// // undefined
// // 20
// // Explanation: The local declaration var a is hoisted to the top of test(). It shadows the global variable a, so the first console.log(a) prints undefined rather than 10. The second prints 20 after the assignment.

// // Q33. Identify which statements produce undefined
// // Code:

// // javascript
// // console.log(first);
// // console.log(second);

// // var first = 100;
// // var second = 200;

// // console.log(first);
// // console.log(second);
// // Output:

// // text
// // undefined
// // undefined
// // 100
// // 200
// // Explanation: The first two statements print undefined because both variables are declared but have not yet been assigned values. The last two statements print their assigned values.

// // Q34. Predict the output and rewrite using hoisting
// // Code:

// // javascript
// // function calculate() {
// //     console.log(total);
// //     var total = 50;
// //     console.log(total);
// // }

// // calculate();
// // Output:

// // text
// // undefined
// // 50
// // Equivalent code illustrating hoisting:

// // javascript
// // function calculate() {
// //     var total;

// //     console.log(total);
// //     total = 50;
// //     console.log(total);
// // }

// // calculate();
// // Explanation: The declaration of total is hoisted to the top of the function, but the assignment total = 50 stays in its original position.

// // Q35. Find and explain the issue
// // Code:

// // javascript
// // var price = 100;

// // function showPrice() {
// //     console.log(price);
// //     var price = 500;
// // }

// // showPrice();
// // console.log(price);
// // Output:

// // text
// // undefined
// // 100
// // Answers:

// // The first console.log() inside showPrice() prints undefined.

// // The final console.log() prints 100.

// // The local variable price is hoisted to the top of showPrice(). It shadows the global variable, but its value is initially undefined. The assignment to 500 occurs after the first log.

// // Section 8: Function Declaration Hoisting
// // Q36. Predict the output
// // Code:

// // javascript
// // sayHello();

// // function sayHello() {
// //     console.log("Hello from CodingGita");
// // }
// // Output:

// // text
// // Hello from CodingGita
// // Explanation: Function declarations are hoisted with their complete function definitions. Therefore, sayHello() can be called before the function appears in the code.

// // Q37. What will be the output?
// // Code:

// // javascript
// // display();

// // function display() {
// //     console.log("Function is hoisted completely");
// // }
// // Output:

// // text
// // Function is hoisted completely
// // Explanation: A function declaration is available before its written position because JavaScript hoists the entire function declaration. In contrast, a var variable declaration is hoisted with the initial value undefined, not with a later assigned function expression.

// // Q38. Find and explain the issue
// // Code:

// // javascript
// // greet();

// // var greet = function() {
// //     console.log("Hi");
// // };

// // Error:

// // text
// // TypeError: greet is not a function
// // Explanation: The declaration var greet is hoisted, but its function expression assignment is not. When greet() executes, greet is still undefined, so it cannot be called as a function.

// // Q39. Predict the output
// // Code:

// // javascript
// // console.log(typeof myFunc);

// // function myFunc() {
// //     return "I am hoisted";
// // }

// // console.log(myFunc());
// // Output:

// // text
// // function
// // I am hoisted
// // Explanation: The function declaration is hoisted, so myFunc already refers to a function when typeof myFunc executes.

// // Q40. Program demonstrating function hoisting
// // Code:

// // javascript
// // var message = "Welcome to CodingGita";

// // greet();

// // function greet() {
// //     console.log(message);
// // }
// // Output:

// // text
// // Welcome to CodingGita
// // Explanation: The function greet() can be called before its declaration because function declarations are hoisted. The function can also access the global variable message.

// // Section 9: Scope Chain
// // Q41. Predict the output and explain the lookup process
// // Code:

// // javascript
// // var institute = "CodingGita";

// // function department() {
// //     var dept = "CSE";

// //     function batch() {
// //         var year = 2025;

// //         console.log(year);
// //         console.log(dept);
// //         console.log(institute);
// //     }

// //     batch();
// // }

// // department();
// // Output:

// // text
// // 2025
// // CSE
// // CodingGita
// // Explanation: JavaScript searches for variables through the scope chain.

// // year is found in batch().

// // dept is found in the outer function department().

// // institute is found in the global scope.

// // Q42. What will happen when this code runs?
// // Code:

// // javascript
// // var globalVar = "I am global";

// // function outer() {
// //     var outerVar = "I am outer";

// //     function inner() {
// //         console.log(globalVar);
// //         console.log(outerVar);
// //         console.log(innerVar);
// //     }

// //     inner();
// // }

// // outer();
// // Output before the error:

// // text
// // I am global
// // I am outer
// // Error:

// // text
// // ReferenceError: innerVar is not defined
// // Explanation: The inner function can access variables in its own scope, its outer function's scope, and the global scope. However, innerVar has not been declared in any accessible scope, so the third `
// // console.log() causes a ReferenceError.

// // Q43. Identify the variables accessible inside deep()
// // Code:

// // javascript
// // var a = 1;

// // function level1() {
// //     var b = 2;

// //     function level2() {
// //         var c = 3;

// //         function deep() {
// //             console.log(a, b, c);
// //         }

// //         deep();
// //     }

// //     level2();
// // }

// // level1();
// // Output:

// // text
// // 1 2 3
// // Explanation: All three variables are accessible inside deep().

// // a belongs to the global scope.

// // b belongs to level1().

// // c belongs to `
// // The scope chain allows inner functions to access variables from their enclosing scopes.

// // Q44. Predict the output
// // Code:

// // javascript
// // var x = "global";

// // function first() {
// //     var x = "first";

// //     function second() {
// //         console.log(x);
// //     }

// //     second();
// // }

// // first();
// // console.log(x);
// // Output:

// // text
// // first
// // global
// // Explanation: Inside second(), JavaScript finds the nearest accessible declaration of x, which belongs to first(). Outside the function, the global variable x is used. The local variable does not change the global variable.
// Log in
// Sign up for free
// You said:
// JavaScript Assignment: Scope and Hoisting
// Section 1: What Is Scope? (5 Questions)
// Q1.
// Consider the following code:

// var city = "Surat";
// function display() {
//     var country = "India";
//     console.log(city);
//     console.log(country);
// }
// display();
// Answer the following:

// Which variable is declared in the global scope?
// Which variable is declared inside the function?
// Can both variables be accessed inside "display()"?
// Q2.
// Predict the output:

// var price = 500;
// function calculate() {
//     var tax = 50;
//     console.log(price + tax);
// }
// calculate();
// console.log(price);
// Q3.
// Identify the scope of each variable:

// var college = "ABC College";
// function student() {
//     var name = "Rahul";
//     var age = 20;
// }
// function teacher() {
//     var subject = "JavaScript";
// }
// Classify "college", "name", "age", and "subject" as global or function-scoped variables.

// Q4.
// What will happen when you execute this code? Explain why.

// function first() {
//     var number = 100;
// }
// function second() {
//     console.log(number);
// }
// first();
// second();
// Q5.
// Write a JavaScript program that:

// Declares one variable in the global scope.
// Declares another variable inside a function.
// Prints both variables inside the function.
// Prints the global variable outside the function.
// Section 2: Global Scope (5 Questions)
// Q6.
// Predict the output:

// var game = "Cricket";
// function play() {
//     console.log("I like " + game);
// }
// play();
// console.log(game);
// Q7.
// What will be the output?

// var language = "English";
// function showLanguage() {
//     console.log(language);
// }
// function changeLanguage() {
//     language = "Gujarati";
// }
// showLanguage();
// changeLanguage();
// showLanguage();
// console.log(language);
// Explain why the output changes.

// Q8.
// Find the error, if any:

// function displayMarks() {
//     console.log(marks);
// }
// var marks = 75;
// displayMarks();
// Will this code produce an error? Explain your answer.

// Q9.
// Predict the output:

// var color = "Red";
// function showColor() {
//     var message = "Favorite color: ";
//     console.log(message + color);
// }
// showColor();
// console.log(color);
// console.log(message);
// Which statement causes an error, and why?

// Q10.
// Write a program that declares a global variable named "school" with the value "Sunrise School".

// Create two functions:

// "showSchool()" should print the school name.
// "updateSchool()" should change the global variable to "Green Valley School".
// Call both functions in an appropriate order and print the final value of "school".

// Section 3: Function Scope (5 Questions)
// Q11.
// Predict the output:

// function calculateTotal() {
//     var first = 100;
//     var second = 200;
//     console.log(first + second);
// }
// calculateTotal();
// console.log(first);
// Explain the behavior of the last statement.

// Q12.
// Find and explain the error:

// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);
// Q13.
// What will be the output?

// var number = 15;
// function test() {
//     var number = 25;
//     console.log(number);
// }
// test();
// console.log(number);
// Why doesn't the value printed inside the function change the global variable?

// Q14.
// Consider this code:

// function calculate() {
//     var result = 40;
//     result = result + 10;
//     console.log(result);
// }
// calculate();
// calculate();
// Answer the following:

// What is the output?
// Is a new local variable created each time the function is called?
// Does the local variable remain accessible after the function finishes executing?
// Q15.
// Write a function named "calculateArea()" that:

// Declares a local variable "length" with the value 8.
// Declares a local variable "width" with the value 4.
// Calculates and prints the area of a rectangle.
// Does not make either variable accessible outside the function.
// Section 4: No Block Scope with "var" (5 Questions)
// Q16.
// Predict the output:

// if (10 > 5) {
//     var result = "Success";
// }
// console.log(result);
// Explain why "result" is accessible outside the "if" block.

// Q17.
// What will be printed?

// var number = 1;
// if (true) {
//     var number = 2;
// }
// console.log(number);
// Why does the output differ from what you might expect if the block had its own scope?

// Q18.
// Predict the output:

// var message = "Start";
// {
//     var message = "End";
// }
// console.log(message);
// Does the standalone block create a separate scope for "var"?

// Q19.
// Find the output and explain the variable's scope:

// if (false) {
//     var result = 100;
// }
// console.log(result);
// Does the condition being "false" prevent the "var" declaration from being hoisted?

// Q20.
// Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

// if (true) {
//     var secret = "Hidden";
// }
// console.log(secret);
// Explain why your solution works.

// Section 5: Block Scope with Loops (5 Questions)
// Q21.
// Predict the complete output:

// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);
// Explain why "number" can be accessed after the loop.

// Q22.
// What will be printed?

// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);
// Explain what happens to the original value of "count".

// Q23.
// Predict the output:

// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);
// Is "i" accessible after the loop? Why?

// Q24.
// Find the error, if any:

// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);
// Does the final statement cause an error? What value does "item" contain?

// Q25.
// Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

// for (var step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// Explain the difference between your solution and the original code.

// Section 6: Function Scope Inside Loops (5 Questions)
// Q26.
// Predict the output:

// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();
// Explain why "number" is accessible after the loop but not outside the function.

// Q27.
// Identify which statements cause errors:

// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);
// Explain your answer for each occurrence of "marks".

// Q28.
// Predict the output:

// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();
// How many times does the loop execute?

// Q29.
// Find and explain the error:

// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
// Why does the order of these statements matter?

// Q30.
// Write a function named "printNumbers()" that:

// Uses a "for" loop to print numbers from 1 to 5.
// Declares the loop variable using "var".
// Prints the loop variable again after the loop, inside the function.
// Demonstrates that the loop variable cannot be accessed outside the function.
// Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

// Section 7: Hoisting with "var" (5 Questions)
// Q31.
// Predict the output:

// console.log(score);
// var score = 90;
// console.log(score);
// Explain why the first statement does not produce a "ReferenceError".

// Q32.
// What will be the output?

// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();
// Why doesn't the first "console.log()" print the global value of "a"?

// Q33.
// Identify which statements produce "undefined" and explain why:

// console.log(first);
// console.log(second);
// var first = 100;
// var second = 200;
// console.log(first);
// console.log(second);
// Q34.
// Predict the output:

// function calculate() {
//     console.log(total);
//     var total = 50;
//     console.log(total);
// }
// calculate();
// Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

// Q35.
// Find and explain the issue:

// var price = 100;
// function showPrice() {
//     console.log(price);
//     var price = 500;
// }
// showPrice();
// console.log(price);
// Answer the following:

// What does the first "console.log()" inside the function print?
// What does the final "console.log()" print?
// How does hoisting affect the local variable "price"?
// Section 8: Function Declaration Hoisting (5 Questions)
// Q36.
// Predict the output:

// sayHello();
// function sayHello() {
//     console.log("Hello from CodingGita");
// }
// Explain why this works even though the function is called before it is written.

// Q37.
// What will be the output? Explain the difference from a normal var variable.

// display();
// function display() {
//     console.log("Function is hoisted completely");
// }
// Q38.
// Find and explain the issue (if any):

// greet();
// var greet = function() {
//     console.log("Hi");
// };
// Why does this behave differently from a function declaration?

// Q39.
// Predict the output:

// console.log(typeof myFunc);
// function myFunc() {
//     return "I am hoisted";
// }
// console.log(myFunc());
// Q40.
// Write a small program that:

// Calls a function before its declaration.
// The function prints a message using a global variable.
// Demonstrates that the entire function (name + body) is available due to hoisting.
// Section 9: Scope Chain (5 Questions)
// Q41.
// Predict the output and explain the lookup process:

// var institute = "CodingGita";
// function department() {
//     var dept = "CSE";
//     function batch() {
//         var year = 2025;
//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }
//     batch();
// }
// department();
// Q42.
// What will happen when this code runs? Explain using the scope chain.

// var globalVar = "I am global";
// function outer() {
//     var outerVar = "I am outer";
//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar); // this line
//     }
//     inner();
// }
// outer();
// Q43.
// Identify which variables are accessible inside deep() and which are not:

// var a = 1;
// function level1() {
//     var b = 2;
//     function level2() {
//         var c = 3;
//         function deep() {
//             console.log(a, b, c);
//         }
//         deep();
//     }
//     level2();
// }
// level1();
// Q44.
// Predict the output:

// var x = "global";
// function first() {
//     var x = "first";
//     function second() {
//         console.log(x);
//     }
//     second();
// }
// first();
// console.log(x);
// Explain why the value of x changes depending on the location of console.log.

// Q45.
// Write a nested function structure (at least 3 levels) that prints:

// A variable from the innermost function
// A variable from the middle function
// A variable from the outermost function / global scope
// Demonstrate the scope chain clearly.
// Section 10: Variable Shadowing (5 Questions)
// Q46.
// Predict the output:

// var score = 50;
// function test() {
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score);
// Explain what “shadowing” means in this example.

// Q47.
// What will be printed?

// var name = "Global Name";
// function show() {
//     var name = "Local Name";
//     console.log(name);
// }
// show();
// console.log(name);
// Does the local variable permanently change the global one? Why or why not?

// Q48.
// Find the output and explain:

// var value = 10;
// function update() {
//     value = 20;          // no var
//     console.log(value);
// }
// update();
// console.log(value);
// Compare this with the previous questions (where var was used inside the function).

// Q49.
// Predict the complete output:

// var color = "Blue";
// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }
// changeColor();
// console.log("Outside:", color);
// Q50.
// Write a program that demonstrates variable shadowing:

// Declare a global variable marks = 70.
// Inside a function, declare another variable marks = 95.
// Print both values (inside and outside the function) so the difference is clear.
// Section 11: Nested Functions (5 Questions)
// Q51.
// Predict the output:

// function outer() {
//     var teacher = "Kartik Sir";
//     function inner() {
//         var student = "Jenil";
//         console.log(student);
//         console.log(teacher);
//     }
//     inner();
// }
// outer();
// Can you access teacher or student outside outer()? Explain.

// Q52.
// What will this code print? Explain the accessibility of each variable.

// function parent() {
//     var a = "Parent";
//     function child() {
//         var b = "Child";
//         function grandchild() {
//             var c = "Grandchild";
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         grandchild();
//     }
//     child();
// }
// parent();
// Q53.
// Find the error(s):

// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();
// Why does the order and placement of the function call matter?

// Q54.
// Predict the output:

// function createMessage() {
//     var greeting = "Hello";
//     function show() {
//         console.log(greeting + " students");
//     }
//     return show;
// }
// var messageFunc = createMessage();
// messageFunc();
// Explain how the inner function still has access to greeting.

// Q55.
// Write a function named studentInfo() that:

// Declares a local variable name
// Declares a local variable course
// Contains an inner function display() that prints both variables
// Calls the inner function from the outer function
// (This is the mini-assignment style question from the notes.)
// Section 12: Common Errors with var (5 Questions)
// Q56.
// What is the problem in this code?

// function test() {
//     x = 100; // missing var
// }
// test();
// console.log(x);
// Explain the unintended side effect.

// Q57.
// Predict the output and explain the misconception:

// if (true) {
//     var x = 20;
// }
// console.log(x);
// Why do beginners often expect an error here?

// Q58.
// What happens here?

// console.log(a);
// var a = 10;
// Explain why there is no ReferenceError and what value is printed.

// Q59.
// Find the issue:

// var x = 10;
// var x = 20;
// console.log(x);
// Is this allowed with var? Why can it become confusing?

// Q60.
// Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:

// function calculate() {
//     total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculate();
// console.log(total); // currently works, but should not
// Submission Instructions
// Write your answers in a notebook or a JavaScript file.
// For output-based questions, write the complete output.
// For error-based questions, clearly identify the error and explain its cause.
// For coding questions, write the complete working program.
// For explanation questions, write a short answer in your own words.
// Try predicting the output before running the code.

// ChatGPT said:
// JavaScript Assignment: Scope and Hoisting — Complete Answers (Q1–Q60)
// These answers are organized section by section, with complete outputs, explanations, and working JavaScript programs. You can write them in your notebook or save the code in a JavaScript file.

// Section 1: What Is Scope?
// Q1. Global scope and function scope
// city is declared in the global scope.

// country is declared inside the display() function and has function scope.

// Yes, both variables can be accessed inside display(). The function can access the global variable city and its local variable country.

// Q2. Predict the output
// Output:


// text
// 550
// 500
// Explanation: price is a global variable, while tax is local to calculate(). The function adds them to get 550. Outside the function, price is still 500.

// Q3. Identify the scope of each variable
// college: Global scope.

// name: Function scope inside student().

// age: Function scope inside student().

// subject: Function scope inside teacher().

// Variables declared with var inside a function cannot normally be accessed outside that function.

// Q4. What will happen?
// Output:


// text
// ReferenceError: number is not defined
// Explanation: number is declared inside first(), so it is local to that function. The second() function cannot access it because it is outside its scope.

// Q5. Program demonstrating scope

// javascript
// var city = "Surat";

// function display() {
//     var country = "India";

//     console.log(city);
//     console.log(country);
// }

// display();
// console.log(city);
// Output:


// text
// Surat
// India
// Surat
// The global variable city can be accessed both inside and outside the function. The local variable country can only be accessed inside display().

// Section 2: Global Scope
// Q6. Predict the output
// Output:


// text
// I like Cricket
// Cricket
// Explanation: The global variable game is accessible inside play() and outside it.

// Q7. What will be the output?
// Output:


// text
// English
// Gujarati
// Gujarati
// Explanation: Initially, language contains "English". The changeLanguage() function updates the existing global variable because it assigns a new value without declaring a local variable using var.

// Therefore, both the second function call and the final console.log() display "Gujarati".

// Q8. Find the error, if any
// Output:


// text
// 75
// Explanation: There is no error. The variable marks is declared globally before displayMarks() is called. Although the function is defined earlier, it executes only when called, after the assignment marks = 75 has occurred.

// Q9. Predict the output
// Output before the error:


// text
// Favorite color: Red
// Red
// Then the following statement causes an error:


// javascript
// console.log(message);
// Error:


// text
// ReferenceError: message is not defined
// Explanation: message is local to showColor(). It cannot be accessed outside that function. The global variable color is accessible everywhere in this example.

// Q10. Program to update a global variable

// javascript
// var school = "Sunrise School";

// function showSchool() {
//     console.log(school);
// }

// function updateSchool() {
//     school = "Green Valley School";
// }

// showSchool();
// updateSchool();
// showSchool();

// console.log("Final school:", school);
// Output:


// text
// Sunrise School
// Green Valley School
// Final school: Green Valley School
// The updateSchool() function modifies the global variable, so the updated value is available to all functions that access it.

// Section 3: Function Scope
// Q11. Predict the output
// Output before the error:


// text
// 300
// The next statement causes:


// text
// ReferenceError: first is not defined
// Explanation: first is declared inside calculateTotal(). It cannot be accessed outside the function.

// Q12. Find and explain the error

// javascript
// function employee() {
//     var salary = 30000;
// }

// employee();
// console.log(salary);
// Error:


// text
// ReferenceError: salary is not defined
// Explanation: salary is a local variable inside employee(). Calling the function does not make its local variables accessible outside it.

// Q13. Predict the output
// Output:


// text
// 25
// 15
// Explanation: The local variable number inside test() shadows the global variable with the same name. The local value is 25, while the global value remains 15.

// Q14. Calculate the output
// Output:


// text
// 50
// 50
// Answers:

// The output is 50 on both calls.

// Yes. Each function call creates a new local variable named result.

// No. The local variable is not accessible after the function finishes executing.

// Each call starts with result = 40, then adds 10.

// Q15. Function to calculate rectangle area

// javascript
// function calculateArea() {
//     var length = 8;
//     var width = 4;

//     var area = length * width;
//     console.log("Area:", area);
// }

// calculateArea();
// Output:


// text
// Area: 32
// The variables length, width, and area are local to calculateArea().

// Section 4: No Block Scope with var
// Q16. Predict the output
// Output:


// text
// Success
// Explanation: var has function scope, not block scope. Therefore, the variable result declared inside the if block is accessible outside that block when the declaration is at the surrounding function or global level.

// Q17. What will be printed?
// Output:


// text
// 2
// Explanation: Both declarations refer to the same function-scoped or global variable. The assignment inside the if block changes its value from 1 to 2.

// Q18. Predict the output
// Output:


// text
// End
// Explanation: A standalone block { } does not create a separate scope for var. Both declarations refer to the same variable, so its final value is "End".

// Q19. Find the output
// Output:


// text
// undefined
// Explanation: The var result declaration is hoisted, but the assignment result = 100 does not execute because the condition is false. Thus, result exists but has the value undefined.

// Q20. Rewrite using block scope

// javascript
// if (true) {
//     let secret = "Hidden";
// }

// console.log(secret);
// Output:


// text
// ReferenceError: secret is not defined
// Explanation: let creates a block-scoped variable. The variable secret is only accessible inside the if block.

// Section 5: Block Scope with Loops
// Q21. Predict the complete output
// Output:


// text
// 2
// 4
// 6
// Final: 8
// Explanation: The loop variable number is declared using var, so it remains accessible after the loop. When the loop ends, number has the value 8.

// Q22. What will be printed?
// Output:


// text
// 1
// 2
// 3
// Count: 4
// Explanation: The loop redeclares the same count variable using var. Its original value of 10 is replaced by 1, and the loop increments it until it becomes 4.

// Q23. Predict the output
// Output:


// text
// 5
// 4
// 3
// After loop: 2
// Explanation: The variable i is global and remains accessible after the loop. It is decremented until the condition i > 2 becomes false.

// Q24. Find the error, if any
// Output:


// text
// Item: 1
// Item: 2
// Item: 3
// Last item: 4
// Explanation: There is no error. The variable item is declared with var and is accessible outside the loop. Its final value is 4.

// Q25. Rewrite the loop using block scope

// javascript
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }

// console.log(step);
// Output:


// text
// 1
// 2
// 3
// 4
// ReferenceError: step is not defined
// Explanation: Unlike var, let creates a variable scoped to the loop block. Therefore, step cannot be accessed after the loop.

// Section 6: Function Scope Inside Loops
// Q26. Predict the output
// Output:


// text
// 10
// 20
// 30
// Final: 4
// Explanation: number is declared using var inside a function. It is accessible throughout calculate(), including after the loop, but it cannot be accessed outside the function.

// Q27. Identify which statements cause errors
// Output before the error:


// text
// 60
// 70
// 80
// 90
// 90
// Then:


// javascript
// console.log(marks);
// causes:


// text
// ReferenceError: marks is not defined
// Explanation:

// The first marks occurrence initializes the loop variable to 60.

// The loop prints 60, 70, and 80.

// After the last increment, marks becomes 90, and the loop stops.

// The console.log(marks) inside student() prints 90.

// The final statement outside student() causes an error because marks is function-scoped.

// Q28. Predict the output
// Output:


// text
// 5
// 6
// 7
// Final value: 8
// Explanation: The loop executes 3 times, for values 5, 6, and 7. When value becomes 8, the condition value < 8 is false.

// Q29. Find and explain the error

// javascript
// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }

// console.log(i);
// calculate();
// Error:


// text
// ReferenceError: i is not defined
// Explanation: The first console.log(i) executes before calculate() is called. The variable i is local to calculate(), so it is not accessible globally.

// Because the error occurs first, the function call is not reached in normal script execution.

// Q30. Write printNumbers()

// javascript
// function printNumbers() {
//     for (var i = 1

// You said:
// JavaScript Assignment: Scope and Hoisting
// Section 1: What Is Scope? (5 Questions)
// Q1.
// Consider the following code:

// var city = "Surat";
// function display() {
//     var country = "India";
//     console.log(city);
//     console.log(country);
// }
// display();
// Answer the following:

// Which variable is declared in the global scope?
// Which variable is declared inside the function?
// Can both variables be accessed inside "display()"?
// Q2.
// Predict the output:

// var price = 500;
// function calculate() {
//     var tax = 50;
//     console.log(price + tax);
// }
// calculate();
// console.log(price);
// Q3.
// Identify the scope of each variable:

// var college = "ABC College";
// function student() {
//     var name = "Rahul";
//     var age = 20;
// }
// function teacher() {
//     var subject = "JavaScript";
// }
// Classify "college", "name", "age", and "subject" as global or function-scoped variables.

// Q4.
// What will happen when you execute this code? Explain why.

// function first() {
//     var number = 100;
// }
// function second() {
//     console.log(number);
// }
// first();
// second();
// Q5.
// Write a JavaScript program that:

// Declares one variable in the global scope.
// Declares another variable inside a function.
// Prints both variables inside the function.
// Prints the global variable outside the function.
// Section 2: Global Scope (5 Questions)
// Q6.
// Predict the output:

// var game = "Cricket";
// function play() {
//     console.log("I like " + game);
// }
// play();
// console.log(game);
// Q7.
// What will be the output?

// var language = "English";
// function showLanguage() {
//     console.log(language);
// }
// function changeLanguage() {
//     language = "Gujarati";
// }
// showLanguage();
// changeLanguage();
// showLanguage();
// console.log(language);
// Explain why the output changes.

// Q8.
// Find the error, if any:

// function displayMarks() {
//     console.log(marks);
// }
// var marks = 75;
// displayMarks();
// Will this code produce an error? Explain your answer.

// Q9.
// Predict the output:

// var color = "Red";
// function showColor() {
//     var message = "Favorite color: ";
//     console.log(message + color);
// }
// showColor();
// console.log(color);
// console.log(message);
// Which statement causes an error, and why?

// Q10.
// Write a program that declares a global variable named "school" with the value "Sunrise School".

// Create two functions:

// "showSchool()" should print the school name.
// "updateSchool()" should change the global variable to "Green Valley School".
// Call both functions in an appropriate order and print the final value of "school".

// Section 3: Function Scope (5 Questions)
// Q11.
// Predict the output:

// function calculateTotal() {
//     var first = 100;
//     var second = 200;
//     console.log(first + second);
// }
// calculateTotal();
// console.log(first);
// Explain the behavior of the last statement.

// Q12.
// Find and explain the error:

// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);
// Q13.
// What will be the output?

// var number = 15;
// function test() {
//     var number = 25;
//     console.log(number);
// }
// test();
// console.log(number);
// Why doesn't the value printed inside the function change the global variable?

// Q14.
// Consider this code:

// function calculate() {
//     var result = 40;
//     result = result + 10;
//     console.log(result);
// }
// calculate();
// calculate();
// Answer the following:

// What is the output?
// Is a new local variable created each time the function is called?
// Does the local variable remain accessible after the function finishes executing?
// Q15.
// Write a function named "calculateArea()" that:

// Declares a local variable "length" with the value 8.
// Declares a local variable "width" with the value 4.
// Calculates and prints the area of a rectangle.
// Does not make either variable accessible outside the function.
// Section 4: No Block Scope with "var" (5 Questions)
// Q16.
// Predict the output:

// if (10 > 5) {
//     var result = "Success";
// }
// console.log(result);
// Explain why "result" is accessible outside the "if" block.

// Q17.
// What will be printed?

// var number = 1;
// if (true) {
//     var number = 2;
// }
// console.log(number);
// Why does the output differ from what you might expect if the block had its own scope?

// Q18.
// Predict the output:

// var message = "Start";
// {
//     var message = "End";
// }
// console.log(message);
// Does the standalone block create a separate scope for "var"?

// Q19.
// Find the output and explain the variable's scope:

// if (false) {
//     var result = 100;
// }
// console.log(result);
// Does the condition being "false" prevent the "var" declaration from being hoisted?

// Q20.
// Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

// if (true) {
//     var secret = "Hidden";
// }
// console.log(secret);
// Explain why your solution works.

// Section 5: Block Scope with Loops (5 Questions)
// Q21.
// Predict the complete output:

// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);
// Explain why "number" can be accessed after the loop.

// Q22.
// What will be printed?

// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);
// Explain what happens to the original value of "count".

// Q23.
// Predict the output:

// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);
// Is "i" accessible after the loop? Why?

// Q24.
// Find the error, if any:

// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);
// Does the final statement cause an error? What value does "item" contain?

// Q25.
// Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

// for (var step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// Explain the difference between your solution and the original code.

// Section 6: Function Scope Inside Loops (5 Questions)
// Q26.
// Predict the output:

// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();
// Explain why "number" is accessible after the loop but not outside the function.

// Q27.
// Identify which statements cause errors:

// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);
// Explain your answer for each occurrence of "marks".

// Q28.
// Predict the output:

// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();
// How many times does the loop execute?

// Q29.
// Find and explain the error:

// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
// Why does the order of these statements matter?

// Q30.
// Write a function named "printNumbers()" that:

// Uses a "for" loop to print numbers from 1 to 5.
// Declares the loop variable using "var".
// Prints the loop variable again after the loop, inside the function.
// Demonstrates that the loop variable cannot be accessed outside the function.
// Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

// Section 7: Hoisting with "var" (5 Questions)
// Q31.
// Predict the output:

// console.log(score);
// var score = 90;
// console.log(score);
// Explain why the first statement does not produce a "ReferenceError".

// Q32.
// What will be the output?

// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();
// Why doesn't the first "console.log()" print the global value of "a"?

// Q33.
// Identify which statements produce "undefined" and explain why:

// console.log(first);
// console.log(second);
// var first = 100;
// var second = 200;
// console.log(first);
// console.log(second);
// Q34.
// Predict the output:

// function calculate() {
//     console.log(total);
//     var total = 50;
//     console.log(total);
// }
// calculate();
// Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

// Q35.
// Find and explain the issue:

// var price = 100;
// function showPrice() {
//     console.log(price);
//     var price = 500;
// }
// showPrice();
// console.log(price);
// Answer the following:

// What does the first "console.log()" inside the function print?
// What does the final "console.log()" print?
// How does hoisting affect the local variable "price"?
// Section 8: Function Declaration Hoisting (5 Questions)
// Q36.
// Predict the output:

// sayHello();
// function sayHello() {
//     console.log("Hello from CodingGita");
// }
// Explain why this works even though the function is called before it is written.

// Q37.
// What will be the output? Explain the difference from a normal var variable.

// display();
// function display() {
//     console.log("Function is hoisted completely");
// }
// Q38.
// Find and explain the issue (if any):

// greet();
// var greet = function() {
//     console.log("Hi");
// };
// Why does this behave differently from a function declaration?

// Q39.
// Predict the output:

// console.log(typeof myFunc);
// function myFunc() {
//     return "I am hoisted";
// }
// console.log(myFunc());
// Q40.
// Write a small program that:

// Calls a function before its declaration.
// The function prints a message using a global variable.
// Demonstrates that the entire function (name + body) is available due to hoisting.
// Section 9: Scope Chain (5 Questions)
// Q41.
// Predict the output and explain the lookup process:

// var institute = "CodingGita";
// function department() {
//     var dept = "CSE";
//     function batch() {
//         var year = 2025;
//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }
//     batch();
// }
// department();
// Q42.
// What will happen when this code runs? Explain using the scope chain.

// var globalVar = "I am global";
// function outer() {
//     var outerVar = "I am outer";
//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar); // this line
//     }
//     inner();
// }
// outer();
// Q43.
// Identify which variables are accessible inside deep() and which are not:

// var a = 1;
// function level1() {
//     var b = 2;
//     function level2() {
//         var c = 3;
//         function deep() {
//             console.log(a, b, c);
//         }
//         deep();
//     }
//     level2();
// }
// level1();
// Q44.
// Predict the output:

// var x = "global";
// function first() {
//     var x = "first";
//     function second() {
//         console.log(x);
//     }
//     second();
// }
// first();
// console.log(x);
// Explain why the value of x changes depending on the location of console.log.

// Q45.
// Write a nested function structure (at least 3 levels) that prints:

// A variable from the innermost function
// A variable from the middle function
// A variable from the outermost function / global scope
// Demonstrate the scope chain clearly.
// Section 10: Variable Shadowing (5 Questions)
// Q46.
// Predict the output:

// var score = 50;
// function test() {
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score);
// Explain what “shadowing” means in this example.

// Q47.
// What will be printed?

// var name = "Global Name";
// function show() {
//     var name = "Local Name";
//     console.log(name);
// }
// show();
// console.log(name);
// Does the local variable permanently change the global one? Why or why not?

// Q48.
// Find the output and explain:

// var value = 10;
// function update() {
//     value = 20;          // no var
//     console.log(value);
// }
// update();
// console.log(value);
// Compare this with the previous questions (where var was used inside the function).

// Q49.
// Predict the complete output:

// var color = "Blue";
// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }
// changeColor();
// console.log("Outside:", color);
// Q50.
// Write a program that demonstrates variable shadowing:

// Declare a global variable marks = 70.
// Inside a function, declare another variable marks = 95.
// Print both values (inside and outside the function) so the difference is clear.
// Section 11: Nested Functions (5 Questions)
// Q51.
// Predict the output:

// function outer() {
//     var teacher = "Kartik Sir";
//     function inner() {
//         var student = "Jenil";
//         console.log(student);
//         console.log(teacher);
//     }
//     inner();
// }
// outer();
// Can you access teacher or student outside outer()? Explain.

// Q52.
// What will this code print? Explain the accessibility of each variable.

// function parent() {
//     var a = "Parent";
//     function child() {
//         var b = "Child";
//         function grandchild() {
//             var c = "Grandchild";
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         grandchild();
//     }
//     child();
// }
// parent();
// Q53.
// Find the error(s):

// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();
// Why does the order and placement of the function call matter?

// Q54.
// Predict the output:

// function createMessage() {
//     var greeting = "Hello";
//     function show() {
//         console.log(greeting + " students");
//     }
//     return show;
// }
// var messageFunc = createMessage();
// messageFunc();
// Explain how the inner function still has access to greeting.

// Q55.
// Write a function named studentInfo() that:

// Declares a local variable name
// Declares a local variable course
// Contains an inner function display() that prints both variables
// Calls the inner function from the outer function
// (This is the mini-assignment style question from the notes.)
// Section 12: Common Errors with var (5 Questions)
// Q56.
// What is the problem in this code?

// function test() {
//     x = 100; // missing var
// }
// test();
// console.log(x);
// Explain the unintended side effect.

// Q57.
// Predict the output and explain the misconception:

// if (true) {
//     var x = 20;
// }
// console.log(x);
// Why do beginners often expect an error here?

// Q58.
// What happens here?

// console.log(a);
// var a = 10;
// Explain why there is no ReferenceError and what value is printed.

// Q59.
// Find the issue:

// var x = 10;
// var x = 20;
// console.log(x);
// Is this allowed with var? Why can it become confusing?

// Q60.
// Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:

// function calculate() {
//     total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculate();
// console.log(total); // currently works, but should not
// Submission Instructions
// Write your answers in a notebook or a JavaScript file.
// For output-based questions, write the complete output.
// For error-based questions, clearly identify the error and explain its cause.
// For coding questions, write the complete working program.
// For explanation questions, write a short answer in your own words.
// Try predicting the output before running the code.   GIVE ALL answer

// ChatGPT said:
// JavaScript Assignment: Scope and Hoisting — All 60 Answers
// Below are the complete answers to all 60 questions, arranged section-wise. Each answer includes the output, explanation, or complete program as required.

// Section 1: What Is Scope?
// Q1. Global scope and function scope
// Global variable: city, with the value "Surat".

// Function-scoped variable: country, with the value "India".

// Can both be accessed inside display()? Yes. The function can access the global variable city and its own local variable country.

// Q2. Predict the output
// Output:


// text
// 550
// 500
// Explanation: The function adds price (500) and tax (50) to get 550. The global variable price remains 500.

// Q3. Identify the scope of each variable
// college: Global scope.

// name: Function scope inside student().

// age: Function scope inside student().

// subject: Function scope inside teacher().

// Variables declared with var inside a function are accessible only within that function.

// Q4. What will happen?
// Output:


// text
// ReferenceError: number is not defined
// Explanation: The variable number is declared inside first(). It is not accessible inside second() because it is outside the scope of first().

// Q5. Program demonstrating scope

// javascript
// var city = "Surat";

// function display() {
//     var country = "India";

//     console.log(city);
//     console.log(country);
// }

// display();
// console.log(city);
// Output:


// text
// Surat
// India
// Surat
// Explanation: The global variable city can be accessed inside and outside the function. The local variable country can only be accessed inside display().

// Section 2: Global Scope
// Q6. Predict the output
// Output:


// text
// I like Cricket
// Cricket
// Explanation: The global variable game can be accessed inside play() and outside the function.

// Q7. What will be the output?
// Output:


// text
// English
// Gujarati
// Gujarati
// Explanation: Initially, language contains "English". The changeLanguage() function updates the global variable to "Gujarati" because it assigns a new value without declaring a new local variable.

// Q8. Find the error, if any
// Output:


// text
// 75
// Explanation: There is no error. The function is called after marks has been assigned the value 75. Defining the function before declaring marks does not cause an error because the function executes only when called.

// Q9. Predict the output
// Output before the error:


// text
// Favorite color: Red
// Red
// Error:


// text
// ReferenceError: message is not defined
// Explanation: The last statement, console.log(message), causes the error because message is a local variable declared inside showColor(). The global variable color is accessible outside the function.

// Q10. Program to update a global variable

// javascript
// var school = "Sunrise School";

// function showSchool() {
//     console.log(school);
// }

// function updateSchool() {
//     school = "Green Valley School";
// }

// showSchool();
// updateSchool();
// showSchool();

// console.log("Final school:", school);
// Output:


// text
// Sunrise School
// Green Valley School
// Final school: Green Valley School
// Explanation: The updateSchool() function changes the global variable. The updated value can then be accessed from other functions and the global scope.

// Section 3: Function Scope
// Q11. Predict the output
// Output before the error:


// text
// 300
// Error:


// text
// ReferenceError: first is not defined
// Explanation: The variable first is declared inside calculateTotal(). It cannot be accessed outside that function.

// Q12. Find and explain the error
// Error:


// text
// ReferenceError: salary is not defined
// Explanation: The variable salary is declared inside employee(). Calling the function does not make its local variables accessible outside it.

// Q13. What will be the output?
// Output:


// text
// 25
// 15
// Explanation: The local variable number inside test() shadows the global variable of the same name. Changing or reading the local variable does not change the global variable.

// Q14. Predict the output
// Output:


// text
// 50
// 50
// Answers:

// The output is 50 on both calls.

// Yes, a new local variable result is created for each function invocation.

// No, result is not accessible outside the function after execution finishes.

// Each call initializes result to 40 and adds 10.

// Q15. Function to calculate rectangle area

// javascript
// function calculateArea() {
//     var length = 8;
//     var width = 4;

//     var area = length * width;

//     console.log("Area:", area);
// }

// calculateArea();
// Output:


// text
// Area: 32
// Explanation: length, width, and area are local to calculateArea().

// Section 4: No Block Scope with var
// Q16. Predict the output
// Output:


// text
// Success
// Explanation: var is function-scoped rather than block-scoped. Therefore, result is accessible outside the if block.

// Q17. What will be printed?
// Output:


// text
// 2
// Explanation: Both declarations of number refer to the same variable because


// You said:
// JavaScript Assignment: Scope and Hoisting
// Section 1: What Is Scope? (5 Questions)
// Q1.
// Consider the following code:

// var city = "Surat";
// function display() {
//     var country = "India";
//     console.log(city);
//     console.log(country);
// }
// display();
// Answer the following:

// Which variable is declared in the global scope?
// Which variable is declared inside the function?
// Can both variables be accessed inside "display()"?
// Q2.
// Predict the output:

// var price = 500;
// function calculate() {
//     var tax = 50;
//     console.log(price + tax);
// }
// calculate();
// console.log(price);
// Q3.
// Identify the scope of each variable:

// var college = "ABC College";
// function student() {
//     var name = "Rahul";
//     var age = 20;
// }
// function teacher() {
//     var subject = "JavaScript";
// }
// Classify "college", "name", "age", and "subject" as global or function-scoped variables.

// Q4.
// What will happen when you execute this code? Explain why.

// function first() {
//     var number = 100;
// }
// function second() {
//     console.log(number);
// }
// first();
// second();
// Q5.
// Write a JavaScript program that:

// Declares one variable in the global scope.
// Declares another variable inside a function.
// Prints both variables inside the function.
// Prints the global variable outside the function.
// Section 2: Global Scope (5 Questions)
// Q6.
// Predict the output:

// var game = "Cricket";
// function play() {
//     console.log("I like " + game);
// }
// play();
// console.log(game);
// Q7.
// What will be the output?

// var language = "English";
// function showLanguage() {
//     console.log(language);
// }
// function changeLanguage() {
//     language = "Gujarati";
// }
// showLanguage();
// changeLanguage();
// showLanguage();
// console.log(language);
// Explain why the output changes.

// Q8.
// Find the error, if any:

// function displayMarks() {
//     console.log(marks);
// }
// var marks = 75;
// displayMarks();
// Will this code produce an error? Explain your answer.

// Q9.
// Predict the output:

// var color = "Red";
// function showColor() {
//     var message = "Favorite color: ";
//     console.log(message + color);
// }
// showColor();
// console.log(color);
// console.log(message);
// Which statement causes an error, and why?

// Q10.
// Write a program that declares a global variable named "school" with the value "Sunrise School".

// Create two functions:

// "showSchool()" should print the school name.
// "updateSchool()" should change the global variable to "Green Valley School".
// Call both functions in an appropriate order and print the final value of "school".

// Section 3: Function Scope (5 Questions)
// Q11.
// Predict the output:

// function calculateTotal() {
//     var first = 100;
//     var second = 200;
//     console.log(first + second);
// }
// calculateTotal();
// console.log(first);
// Explain the behavior of the last statement.

// Q12.
// Find and explain the error:

// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);
// Q13.
// What will be the output?

// var number = 15;
// function test() {
//     var number = 25;
//     console.log(number);
// }
// test();
// console.log(number);
// Why doesn't the value printed inside the function change the global variable?

// Q14.
// Consider this code:

// function calculate() {
//     var result = 40;
//     result = result + 10;
//     console.log(result);
// }
// calculate();
// calculate();
// Answer the following:

// What is the output?
// Is a new local variable created each time the function is called?
// Does the local variable remain accessible after the function finishes executing?
// Q15.
// Write a function named "calculateArea()" that:

// Declares a local variable "length" with the value 8.
// Declares a local variable "width" with the value 4.
// Calculates and prints the area of a rectangle.
// Does not make either variable accessible outside the function.
// Section 4: No Block Scope with "var" (5 Questions)
// Q16.
// Predict the output:

// if (10 > 5) {
//     var result = "Success";
// }
// console.log(result);
// Explain why "result" is accessible outside the "if" block.

// Q17.
// What will be printed?

// var number = 1;
// if (true) {
//     var number = 2;
// }
// console.log(number);
// Why does the output differ from what you might expect if the block had its own scope?

// Q18.
// Predict the output:

// var message = "Start";
// {
//     var message = "End";
// }
// console.log(message);
// Does the standalone block create a separate scope for "var"?

// Q19.
// Find the output and explain the variable's scope:

// if (false) {
//     var result = 100;
// }
// console.log(result);
// Does the condition being "false" prevent the "var" declaration from being hoisted?

// Q20.
// Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

// if (true) {
//     var secret = "Hidden";
// }
// console.log(secret);
// Explain why your solution works.

// Section 5: Block Scope with Loops (5 Questions)
// Q21.
// Predict the complete output:

// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);
// Explain why "number" can be accessed after the loop.

// Q22.
// What will be printed?

// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);
// Explain what happens to the original value of "count".

// Q23.
// Predict the output:

// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);
// Is "i" accessible after the loop? Why?

// Q24.
// Find the error, if any:

// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);
// Does the final statement cause an error? What value does "item" contain?

// Q25.
// Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

// for (var step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// Explain the difference between your solution and the original code.

// Section 6: Function Scope Inside Loops (5 Questions)
// Q26.
// Predict the output:

// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();
// Explain why "number" is accessible after the loop but not outside the function.

// Q27.
// Identify which statements cause errors:

// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);
// Explain your answer for each occurrence of "marks".

// Q28.
// Predict the output:

// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();
// How many times does the loop execute?

// Q29.
// Find and explain the error:

// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
// Why does the order of these statements matter?

// Q30.
// Write a function named "printNumbers()" that:

// Uses a "for" loop to print numbers from 1 to 5.
// Declares the loop variable using "var".
// Prints the loop variable again after the loop, inside the function.
// Demonstrates that the loop variable cannot be accessed outside the function.
// Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.   Give me answer of this

// ChatGPT said:
// JavaScript Assignment: Scope and Hoisting
// Answers: Section 1 to Section 6 (Q1–Q30)
// Section 1: What Is Scope?
// Q1. Global scope and function scope
// The global variable is city, with the value "Surat".

// The function-scoped variable is country, with the value "India".

// Yes, both variables can be accessed inside display(). The function can access the global variable city and its local variable country.

// Q2. Predict the output
// Output:


// text
// 550
// 500
// Explanation: price is a global variable, and tax is a local variable inside calculate(). Their sum is 550. The global variable price remains 500.

// Q3. Identify the scope of each variable
// college: Global scope.

// name: Function scope inside student().

// age: Function scope inside student().

// subject: Function scope inside teacher().

// Explanation: Variables declared using var inside a function are accessible within that function, not outside it.

// Q4. What will happen?
// Output:


// text
// ReferenceError: number is not defined
// Explanation: The variable number is declared inside first(). It cannot be accessed inside second() because it is local to first().

// Q5. Write a JavaScript program that demonstrates scope

// javascript
// var city = "Surat";

// function display() {
//     var country = "India";

//     console.log(city);
//     console.log(country);
// }

// display();
// console.log(city);
// Output:


// text
// Surat
// India
// Surat
// Explanation: The global variable city can be accessed inside and outside the function. The local variable country can only be accessed inside display().

// Section 2: Global Scope
// Q6. Predict the output
// Output:


// text
// I like Cricket
// Cricket
// Explanation: The global variable game is accessible inside play() and outside the function.

// Q7. What will be the output?
// Output:


// text
// English
// Gujarati
// Gujarati
// Explanation: Initially, language contains "English". The function changeLanguage() changes the global variable to "Gujarati". Therefore, the second function call and the final statement print "Gujarati".

// Q8. Find the error, if any
// Output:


// text
// 75
// Explanation: There is no error. The function displayMarks() is called after the global variable marks has been assigned the value 75.

// Q9. Predict the output
// Output before the error:


// text
// Favorite color: Red
// Red
// Error:


// text
// ReferenceError: message is not defined
// Explanation: The statement console.log(message) causes the error because message is declared inside showColor(). It cannot be accessed outside that function. The global variable color can be accessed anywhere in this example.

// Q10. Program to update a global variable

// javascript
// var school = "Sunrise School";

// function showSchool() {
//     console.log(school);
// }

// function updateSchool() {
//     school = "Green Valley School";
// }

// showSchool();
// updateSchool();
// showSchool();

// console.log("Final school:", school);
// Output:


// text
// Sunrise School
// Green Valley School
// Final school: Green Valley School
// Explanation: The updateSchool() function changes the global variable, so its new value can be accessed by other functions.

// Section 3: Function Scope
// Q11. Predict the output
// Output before the error:


// text
// 300
// Error:


// text
// ReferenceError: first is not defined
// Explanation: The variable first is declared inside calculateTotal(). It cannot be accessed outside that function.

// Q12. Find and explain the error
// Error:


// text
// ReferenceError: salary is not defined
// Explanation: The variable salary is local to employee(). Calling the function does not make the local variable accessible outside it.

// Q13. What will be the output?
// Output:


// text
// 25
// 15
// Explanation: The local variable number inside test() shadows the global variable with the same name. The local variable has the value 25, while the global variable remains 15.

// Q14. Predict the output
// Output:


// text
// 50
// 50
// Answers:

// The output is 50 on both calls.

// Yes, a new local variable result is created for each function call.

// No, the local variable is not accessible outside the function after it finishes executing.

// Explanation: Each call initializes result to 40 and adds 10.

// Q15. Function to calculate the area of a rectangle

// javascript
// function calculateArea() {
//     var length = 8;
//     var width = 4;

//     var area = length * width;

//     console.log("Area:", area);
// }

// calculateArea();
// Output:


// text
// Area: 32
// Explanation: The variables length, width, and area are local to calculateArea().

// Section 4: No Block Scope with var
// Q16. Predict the output
// Output:


// text
// Success
// Explanation: var is function-scoped, not block-scoped. Therefore, the variable result remains accessible outside the if block.

// Q17. What will be printed?
// Output:


// text
// 2
// Explanation: Both declarations of number refer to the same variable because var does not create a separate block scope. Its value changes from 1 to 2.

// Q18. Predict the output
// Output:


// text
// End
// Explanation: A standalone block does not create a separate scope for var. The assignment inside the block changes message to "End".

// Q19. Find the output
// Output:


// text
// undefined
// Explanation: The declaration of result is hoisted, but the assignment to 100 does not execute because the condition is false. Therefore, result remains undefined.

// Q20. Rewrite the code using block scope

// javascript
// if (true) {
//     let secret = "Hidden";
// }

// console.log(secret);
// Output before the error: No output.

// Error:


// text
// ReferenceError: secret is not defined
// Explanation: The let keyword creates a block-scoped variable. Therefore, secret cannot be accessed outside the if block.

// Section 5: Block Scope with Loops
// Q21. Predict the complete output
// Output:


// text
// 2
// 4
// 6
// Final: 8
// Explanation: The variable number is declared using var, so it remains accessible after the loop. Its final value is 8.

// Q22. What will be printed?
// Output:


// text
// 1
// 2

// You said:
// Section 5: Block Scope with Loops (5 Questions)
// Q21.
// Predict the complete output:

// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);
// Explain why "number" can be accessed after the loop.

// Q22.
// What will be printed?

// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);
// Explain what happens to the original value of "count".

// Q23.
// Predict the output:

// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);
// Is "i" accessible after the loop? Why?

// Q24.
// Find the error, if any:

// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);
// Does the final statement cause an error? What value does "item" contain?

// Q25.
// Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

// for (var step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// Explain the difference between your solution and the original code.

// Section 6: Function Scope Inside Loops (5 Questions)
// Q26.
// Predict the output:

// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();
// Explain why "number" is accessible after the loop but not outside the function.

// Q27.
// Identify which statements cause errors:

// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);
// Explain your answer for each occurrence of "marks".

// Q28.
// Predict the output:

// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();
// How many times does the loop execute?

// Q29.
// Find and explain the error:

// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
// Why does the order of these statements matter?

// Q30.
// Write a function named "printNumbers()" that:

// Uses a "for" loop to print numbers from 1 to 5.
// Declares the loop variable using "var".
// Prints the loop variable again after the loop, inside the function.
// Demonstrates that the loop variable cannot be accessed outside the function.
// Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

// ChatGPT said:
// Section 5: Block Scope with Loops
// Q21. Predict the complete output
// Code:


// javascript
// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);
// Output:


// text
// 2
// 4
// 6
// Final: 8
// Explanation: The loop prints 2, 4, and 6. After the last iteration, number becomes 8, so the loop stops. Because var is not block-scoped, number remains accessible after the loop.

// Q22. What will be printed?
// Code:


// javascript
// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);
// Output:


// text
// 1
// 2
// 3
// Count: 4
// Explanation: The loop uses the same count variable because both declarations use var in the same scope. The original value 10 is replaced by 1. After the loop finishes, count is 4.

// Q23. Predict the output
// Code:


// javascript
// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);
// Output:


// text
// 5
// 4
// 3
// After loop: 2
// Explanation: The loop prints 5, 4, and 3. Then i becomes 2, and the condition i > 2 becomes false.

// Yes, i is accessible after the loop because it was declared outside the loop.

// Q24. Find the error, if any
// Code:


// javascript
// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);
// Output:


// text
// Item: 1
// Item: 2
// Item: 3
// Last item: 4
// Explanation: There is no error. Since item is declared using var, it remains accessible after the loop. Its final value is 4 because the increment happens before the next condition check.

// Q25. Rewrite the loop using block scope
// Corrected code:


// javascript
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step);
// Output before the error:


// text
// 1
// 2
// 3
// 4
// Error:


// text
// ReferenceError: step is not defined
// Explanation: The let keyword creates a block-scoped variable. Therefore, step is accessible inside the loop but not outside it.

// Unlike var, let prevents the loop variable from being accessed outside the loop.

// Section 6: Function Scope Inside Loops
// Q26. Predict the output
// Code:


// javascript
// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();
// Output:


// text
// 10
// 20
// 30
// Final: 4
// Explanation: The loop prints 10, 20, and 30. After the loop ends, number is 4.

// The variable number is accessible after the loop because var has function scope. However, it cannot be accessed outside calculate() because it is declared inside that function.

// Q27. Identify which statements cause errors
// Code:


// javascript
// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);
// Output before the error:


// text
// 60
// 70
// 80
// 90
// 90
// Error:


// text
// ReferenceError: marks is not defined
// Explanation:

// The loop initializes marks to 60.

// The loop prints 60, 70, and 80.

// After the final increment, marks becomes 90, so the loop stops.

// The console.log(marks) inside student() prints 90 because marks is function-scoped.

// The final console.log(marks) outside student() causes a ReferenceError because marks is not accessible outside the function.

// Q28. Predict the output
// Code:


// javascript
// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();
// Output:


// text
// 5
// 6
// 7
// Final value: 8
// Explanation: The loop executes 3 times, printing 5, 6, and 7. When value becomes 8, the condition value < 8 becomes false, and the loop ends.

// Q29. Find and explain the error
// Code:


// javascript
// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
// Error:


// text
// ReferenceError: i is not defined
// Explanation: The variable i is declared inside calculate(), so it is accessible only within that function. The first console.log(i) attempts to access it outside the function.

// Because the error occurs before calculate() is called, the function does not execute during normal script execution.

// Q30. Write the printNumbers() function
// Code:


// javascript
// function printNumbers() {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     }

//     console.log("After loop:", i);
// }

// printNumbers();

// console.log(i);
// Output before the error:


// text
// 1
// 2
// 3
// 4
// 5
// After loop: 6
// Error:


// text
// ReferenceError: i is not defined
// Explanation: The loop prints numbers from 1 to 5. After the loop, i becomes 6, which is printed inside the function.

// The final console.log(i) causes a ReferenceError because i is declared inside printNumbers() and cannot be accessed outside the function.


// Log in for more personalized help with writing, rewriting, and translation.


// Log in

// Sign up for free
// You said:
// Section 7: Hoisting with "var" (5 Questions)
// Q31.
// Predict the output:

// console.log(score);
// var score = 90;
// console.log(score);
// Explain why the first statement does not produce a "ReferenceError".

// Q32.
// What will be the output?

// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();
// Why doesn't the first "console.log()" print the global value of "a"?

// Q33.
// Identify which statements produce "undefined" and explain why:

// console.log(first);
// console.log(second);
// var first = 100;
// var second = 200;
// console.log(first);
// console.log(second);
// Q34.
// Predict the output:

// function calculate() {
//     console.log(total);
//     var total = 50;
//     console.log(total);
// }
// calculate();
// Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

// Q35.
// Find and explain the issue:

// var price = 100;
// function showPrice() {
//     console.log(price);
//     var price = 500;
// }
// showPrice();
// console.log(price);
// Answer the following:

// What does the first "console.log()" inside the function print?
// What does the final "console.log()" print?
// How does hoisting affect the local variable "price"?
// Section 8: Function Declaration Hoisting (5 Questions)
// Q36.
// Predict the output:

// sayHello();
// function sayHello() {
//     console.log("Hello from CodingGita");
// }
// Explain why this works even though the function is called before it is written.

// Q37.
// What will be the output? Explain the difference from a normal var variable.

// display();
// function display() {
//     console.log("Function is hoisted completely");
// }
// Q38.
// Find and explain the issue (if any):

// greet();
// var greet = function() {
//     console.log("Hi");
// };
// Why does this behave differently from a function declaration?

// Q39.
// Predict the output:

// console.log(typeof myFunc);
// function myFunc() {
//     return "I am hoisted";
// }
// console.log(myFunc());
// Q40.
// Write a small program that:

// Calls a function before its declaration.
// The function prints a message using a global variable.
// Demonstrates that the entire function (name + body) is available due to hoisting.
// Section 9: Scope Chain (5 Questions)
// Q41.
// Predict the output and explain the lookup process:

// var institute = "CodingGita";
// function department() {
//     var dept = "CSE";
//     function batch() {
//         var year = 2025;
//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }
//     batch();
// }
// department();
// Q42.
// What will happen when this code runs? Explain using the scope chain.

// var globalVar = "I am global";
// function outer() {
//     var outerVar = "I am outer";
//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar); // this line
//     }
//     inner();
// }
// outer();
// Q43.
// Identify which variables are accessible inside deep() and which are not:

// var a = 1;
// function level1() {
//     var b = 2;
//     function level2() {
//         var c = 3;
//         function deep() {
//             console.log(a, b, c);
//         }
//         deep();
//     }
//     level2();
// }
// level1();
// Q44.
// Predict the output:

// var x = "global";
// function first() {
//     var x = "first";
//     function second() {
//         console.log(x);
//     }
//     second();
// }
// first();
// console.log(x);
// Explain why the value of x changes depending on the location of console.log.

// Q45.
// Write a nested function structure (at least 3 levels) that prints:

// A variable from the innermost function
// A variable from the middle function
// A variable from the outermost function / global scope
// Demonstrate the scope chain clearly.
// Section 10: Variable Shadowing (5 Questions)
// Q46.
// Predict the output:

// var score = 50;
// function test() {
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score);
// Explain what “shadowing” means in this example.

// Q47.
// What will be printed?

// var name = "Global Name";
// function show() {
//     var name = "Local Name";
//     console.log(name);
// }
// show();
// console.log(name);
// Does the local variable permanently change the global one? Why or why not?

// Q48.
// Find the output and explain:

// var value = 10;
// function update() {
//     value = 20;          // no var
//     console.log(value);
// }
// update();
// console.log(value);
// Compare this with the previous questions (where var was used inside the function).

// Q49.
// Predict the complete output:

// var color = "Blue";
// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }
// changeColor();
// console.log("Outside:", color);
// Q50.
// Write a program that demonstrates variable shadowing:

// Declare a global variable marks = 70.
// Inside a function, declare another variable marks = 95.
// Print both values (inside and outside the function) so the difference is clear.
// Section 11: Nested Functions (5 Questions)
// Q51.
// Predict the output:

// function outer() {
//     var teacher = "Kartik Sir";
//     function inner() {
//         var student = "Jenil";
//         console.log(student);
//         console.log(teacher);
//     }
//     inner();
// }
// outer();
// Can you access teacher or student outside outer()? Explain.

// Q52.
// What will this code print? Explain the accessibility of each variable.

// function parent() {
//     var a = "Parent";
//     function child() {
//         var b = "Child";
//         function grandchild() {
//             var c = "Grandchild";
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         grandchild();
//     }
//     child();
// }
// parent();
// Q53.
// Find the error(s):

// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();
// Why does the order and placement of the function call matter?

// Q54.
// Predict the output:

// function createMessage() {
//     var greeting = "Hello";
//     function show() {
//         console.log(greeting + " students");
//     }
//     return show;
// }
// var messageFunc = createMessage();
// messageFunc();
// Explain how the inner function still has access to greeting.

// Q55.
// Write a function named studentInfo() that:

// Declares a local variable name
// Declares a local variable course
// Contains an inner function display() that prints both variables
// Calls the inner function from the outer function
// (This is the mini-assignment style question from the notes.)
// Section 12: Common Errors with var (5 Questions)
// Q56.
// What is the problem in this code?

// function test() {
//     x = 100; // missing var
// }
// test();
// console.log(x);
// Explain the unintended side effect.

// Q57.
// Predict the output and explain the misconception:

// if (true) {
//     var x = 20;
// }
// console.log(x);
// Why do beginners often expect an error here?

// Q58.
// What happens here?

// console.log(a);
// var a = 10;
// Explain why there is no ReferenceError and what value is printed.

// Q59.
// Find the issue:

// var x = 10;
// var x = 20;
// console.log(x);
// Is this allowed with var? Why can it become confusing?

// Q60.
// Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:

// function calculate() {
//     total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculate();
// console.log(total); // currently works, but should not

// ChatGPT said:
// JavaScript Assignment: Scope and Hoisting
// Answers: Section 7 to Section 12 (Q31–Q60)
// Section 7: Hoisting with var
// Q31. Predict the output
// Code:

// javascript
// console.log(score);
// var score = 90;
// console.log(score);
// Output:

// text
// undefined
// 90
// Explanation: JavaScript hoists the declaration of score to the top of its scope. The variable exists when the first console.log() runs, but its value has not yet been assigned, so it prints undefined.

// Q32. What will be the output?
// Code:

// javascript
// var a = 10;

// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }

// test();
// Output:

// text
// undefined
// 20
// Explanation: The local declaration var a is hoisted to the top of test(). It shadows the global variable a, so the first console.log(a) prints undefined rather than 10. The second prints 20 after the assignment.

// Q33. Identify which statements produce undefined
// Code:

// javascript
// console.log(first);
// console.log(second);

// var first = 100;
// var second = 200;

// console.log(first);
// console.log(second);
// Output:

// text
// undefined
// undefined
// 100
// 200
// Explanation: The first two statements print undefined because both variables are declared but have not yet been assigned values. The last two statements print their assigned values.

// Q34. Predict the output and rewrite using hoisting
// Code:

// javascript
// function calculate() {
//     console.log(total);
//     var total = 50;
//     console.log(total);
// }

// calculate();
// Output:

// text
// undefined
// 50
// Equivalent code illustrating hoisting:

// javascript
// function calculate() {
//     var total;

//     console.log(total);
//     total = 50;
//     console.log(total);
// }

// calculate();
// Explanation: The declaration of total is hoisted to the top of the function, but the assignment total = 50 stays in its original position.

// Q35. Find and explain the issue
// Code:

// javascript
// var price = 100;

// function showPrice() {
//     console.log(price);
//     var price = 500;
// }

// showPrice();
// console.log(price);
// Output:

// text
// undefined
// 100
// Answers:

// The first console.log() inside showPrice() prints undefined.

// The final console.log() prints 100.

// The local variable price is hoisted to the top of showPrice(). It shadows the global variable, but its value is initially undefined. The assignment to 500 occurs after the first log.

// Section 8: Function Declaration Hoisting
// Q36. Predict the output
// Code:

// javascript
// sayHello();

// function sayHello() {
//     console.log("Hello from CodingGita");
// }
// Output:

// text
// Hello from CodingGita
// Explanation: Function declarations are hoisted with their complete function definitions. Therefore, sayHello() can be called before the function appears in the code.

// Q37. What will be the output?
// Code:

// javascript
// display();

// function display() {
//     console.log("Function is hoisted completely");
// }
// Output:

// text
// Function is hoisted completely
// Explanation: A function declaration is available before its written position because JavaScript hoists the entire function declaration. In contrast, a var variable declaration is hoisted with the initial value undefined, not with a later assigned function expression.

// Q38. Find and explain the issue
// Code:

// javascript
// greet();

// var greet = function() {
//     console.log("Hi");
// };
// Error:

// text
// TypeError: greet is not a function
// Explanation: The declaration var greet is hoisted, but its function expression assignment is not. When greet() executes, greet is still undefined, so it cannot be called as a function.

// Q39. Predict the output
// Code:

// javascript
// console.log(typeof myFunc);

// function myFunc() {
//     return "I am hoisted";
// }

// console.log(myFunc());
// Output:

// text
// function
// I am hoisted
// Explanation: The function declaration is hoisted, so myFunc already refers to a function when typeof myFunc executes.

// Q40. Program demonstrating function hoisting
// Code:

// javascript
// var message = "Welcome to CodingGita";

// greet();

// function greet() {
//     console.log(message);
// }
// Output:

// text
// Welcome to CodingGita
// Explanation: The function greet() can be called before its declaration because function declarations are hoisted. The function can also access the global variable message.

// Section 9: Scope Chain
// Q41. Predict the output and explain the lookup process
// Code:

// javascript
// var institute = "CodingGita";

// function department() {
//     var dept = "CSE";

//     function batch() {
//         var year = 2025;

//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }

//     batch();
// }

// department();
// Output:

// text
// 2025
// CSE
// CodingGita
// Explanation: JavaScript searches for variables through the scope chain.

// year is found in batch().

// dept is found in the outer function department().

// institute is found in the global scope.

// Q42. What will happen when this code runs?
// Code:

// javascript
// var globalVar = "I am global";

// function outer() {
//     var outerVar = "I am outer";

//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     inner();
// }

// outer();
// Output before the error:

// text
// I am global
// I am outer
// Error:

// text
// ReferenceError: innerVar is not defined
// Explanation: The inner function can access variables in its own scope, its outer function's scope, and the global scope. However, innerVar has not been declared in any accessible scope, so the third console.log() causes a ReferenceError.

// Q43. Identify the variables accessible inside deep()
// Code:

// javascript
// var a = 1;

// function level1() {
//     var b = 2;

//     function level2() {
//         var c = 3;

//         function deep() {
//             console.log(a, b, c);
//         }

//         deep();
//     }

//     level2();
// }

// level1();
// Output:

// text
// 1 2 3
// Explanation: All three variables are accessible inside deep().

// a belongs to the global scope.

// b belongs to level1().

// c belongs to level2().

// The scope chain allows inner functions to access variables from their enclosing scopes.

// Q44. Predict the output
// Code:

// javascript
// var x = "global";

// function first() {
//     var x = "first";

//     function second() {
//         console.log(x);
//     }

//     second();
// }

// first();
// console.log(x);
// Output:

// text
// first
// global
// Explanation: Inside second(), JavaScript finds the nearest accessible declaration of x, which belongs to first(). Outside the function, the global variable x is used. The local variable does not change the global variable.

// Q45. Write a nested function structure
// Code:

// javascript
// var globalMessage = "I am global";

// function outer() {
//     var outerMessage = "I am in the outer function";

//     function middle() {
//         var middleMessage = "I am in the middle function";

//         function inner() {
//             var innerMessage = "I am in the inner function";

//             console.log(innerMessage);
//             console.log(middleMessage);
//             console.log(outerMessage);
//             console.log(globalMessage);
//         }

//         inner();
//     }

//     middle();
// }

// outer();
// Output:

// text
// I am in the inner function
// I am in the middle function
// I am in the outer function
// I am global
// Explanation: The innermost function can access its own variable and variables declared in every enclosing scope, including the global scope.

// Section 10: Variable Shadowing
// Q46. Predict the output
// Code:

// javascript
// var score = 50;

// function test() {
//     var score = 90;
//     console.log(score);
// }

// test();
// console.log(score);
// Output:

// text
// 90
// 50
// Explanation: Variable shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope. The local score shadows the global score inside test(), but the global value remains unchanged.

// Q47. What will be printed?
// Code:

// javascript
// var name = "Global Name";

// function show() {
//     var name = "Local Name";
//     console.log(name);
// }

// show();
// console.log(name);
// Output:

// text
// Local Name
// Global Name
// Explanation: The local variable name does not permanently change the global variable. They are two separate variables in different scopes.,
// Q48. Find the output and explain
// Code:

// javascript
// var value = 10;

// function update() {
//     value = 20;
//     console.log(value);
// }

// update();
// console.log(value);
// Output:

// text
// 20
// 20
// Explanation: Because there is no local declaration such as var value, the assignment updates the existing global variable. Both console.log() statements therefore print 20.

// Unlike the previous questions, this code does not create a separate local variable that shadows the global variable.
// Q49. Predict the complete output
// Code:

// javascript
// var color = "Blue";

// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }

// changeColor();
// console.log("Outside:", color);
// Output:

// text
// Inside: Red
// Outside: Blue
// Explanation: The local variable color shadows the global variable inside changeColor(). The global variable remains "Blue".

// Q50. Program demonstrating variable shadowing
// Code:

// javascript
// var marks = 70;

// function showMarks() {
//     var marks = 95
// console.log("Inside function:", marks);
// }

// showMarks();
// console.log("Outside function:", marks);
// Output:

// text
// Inside function: 95
// Outside function: 70
// Explanation: The local variable marks shadows the global variable inside the function. The global variable retains its original value of 70.

// Section 11: Nested Functions
// Q51. Predict the output
// Code:

// javascript
// function outer() {
//     var teacher = "Kartik Sir";

//     function inner() {
//         var student = "Jenil";

//         console.log(student);
//         console.log(teacher);
//     }

//     inner();
// }

// outer();
// Output:

// text
// Jenil
// Kartik Sir
// Explanation: The inner function can access both its local variable student and the outer functionfunction's variable teacher.

// Neither variable can be accessed directly outside outer() in this example. Both are local variables, and inner() itselfThe global variable retains its original value of 70.

// Section 11: Nested Functions
// Q51. Predict the output
// Code:

// javascript
// function outer() {
//     var teacher = "Kartik Sir";

//     function inner() {
//         var student = "Jenil";

//         console.log(student);
//         console.log(teacher);
//     }

//     inner();
// }

// outer();
// Output:

// text
// Jenil
// Kartik Sir
// Explanation: The inner function can access both its local variable student and the outer function's variable teacher.

// Neither variable can be accessed directly outside outer() in this example. Both are local variables, and inner() itself is also declared inside outer().

// Q52. What will this code print?
// Code:

// javascript
// function parent() {
//     var a = "Parent";

//     function child() {
//         var b = "Child";

//         function grandchild() {
//             var c = "Grandchild";

//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }

//         grandchild();
//     }

//     child();
// }

// parent();
// Output:

// text
// Parent
// Child
// Grandchild
// Explanation:

// - a belongs
// a belongs to parent().

// b belongs to child().

// c belongs to grandchild().

// The innermost function can access all three variables through the scope chain.

// Q53. Find the errors
// Code:

// javascript
// function outer() {
// console.log(secret);
//     }
// }

// inner();
// outer();
// Error:

// text
// ReferenceError: inner is not defined
// Explanation: The function inner() is declared inside outer(), so it cannot be called directly from the global scope. The first statement, inner(), causes the error before outer() is called.

// Corrected code:

// javascript
// function outer() {
//     var secret = "Hidden";

//     function inner() {
//         console.log(secret);
//     }

//     inner();
// }

// outer();
// Output:

// text
// Hidden
// Explanation: Calling inner() from inside outer() makes it accessible in the correct scope. The inner function can also  access the outer variable secret.

// Q54. Predict the output
// Code:

// javascript
// function createMessage() {
//     var greeting = "Hello";

//     function show() {
//         console.log(greeting + " students");
//     }

//     return show;
// }

// var messageFunc = createMessage();
// messageFunc();
// Output:

// text
// Hello students
// Explanation: The inner function show() forms a closure over its surrounding lexical scope. This means it retains access to greeting even after createMessage() has
// finished executing. The returned function can therefore still use the variable.

// Q55. Write the studentInfo() function
// Code:

// javascript
// function studentInfo() {
//     var name = "Jenil";
//     var course = "JavaScript";

//     function display() {
//         console.log("Name:", name);
//         console.log("Course:", course);
//     }

//     display();
// }

// studentInfo();
// Output:

// text
// Name: Jenil
// Course: JavaScript
// Explanation: The inner function display() can access the local variables `name  and course declared in studentInfo().

// Section 12: Common Errors with var
// Q56. What is the problem in this code?
// Code:

// javascript
// function test() {
//     x = 100;
// }

// test();
// console.log(x);
// Output in a non-strict script:

// text
// 100
// Explanation: The variable x is assigned without being declared. In a non-strict script, this creates a global variable,which can unintentionally affect other parts of the program.

// In strict mode, assigning to an undeclared variable causes a ReferenceError. Using let, const, or var appropriately prevents this problem.
// Q57. Predict the output and explain the misconception
// Code:

// javascript
// if (true) {
//     var x = 20;
// }

// console.log(x);
