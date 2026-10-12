// Part I-d] Nested For Loop Questions
// Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// Print the following right-triangle alphabet pattern using nested for loops (without hard-coding any row):
// A
// A B
// A B C
// A B C D
// A B C D E
// Print this hollow right-triangle star pattern using nested loops:
// *
// * *
// *   *
// *     *
// * * * * *
// Print the following reverse right-angle star pattern using nested for loops:
// *****
// ****
// ***
// **
// *
// Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
// Print this reverse right-angle number pattern using nested for loops:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// Print the following reverse right-angle pattern of consecutive numbers using nested loops:
// 15 14 13 12 11
// 10  9  8  7
//  6  5  4
//  3  2
//  1
// Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested for loops:
// * * * * *
// *     *
// *   *
// * *
// *
// Using nested for loops, print a 5×5 square of stars (*) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).

// Write nested for loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)

// Given a positive integer n, use nested for loops to print an n × n matrix where each cell contains the absolute difference of its row and column indices (0-based or 1-based — your choice, but be consistent).

// Using nested for loops, generate and print all unique pairs (i, j) such that 1 ≤ i < j ≤ 10 and i + j is a perfect square. Print each pair on a new line.

// Print the following diamond number pattern for n = 5 using nested loops (no extra spaces or characters allowed beyond what’s shown):

//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1
// Write nested for loops that print a 6×6 matrix filled with consecutive numbers starting from 1, but in spiral order (clockwise, starting from top-left).
// Example start of the matrix:
//  1  2  3  4  5  6
// 20 21 22 23 24  7
// 19 32 33 34 25  8
// 18 31 36 35 26  9
// 17 30 29 28 27 10
// 16 15 14 13 12 11
// Using only nested for loops (no arrays or built-in reverse methods), print the Pascal’s Triangle up to 8 rows. Each row should be properly spaced so the triangle looks centered.

// Given two positive integers rows and cols, use nested for loops to print a matrix where:

// The border cells contain the value 1
// All inner cells contain the value 0
// Additionally, if a cell’s row index + column index is divisible by 3, force the value to 2 (even if it is on the border).


// Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// num = 1

// for i in range(1, 5):
//     for j in range(1, i + 1):
//         print(num, end=" ")
//         num += 1
//     print()

// 1. Right-triangle number pattern
// python
// num = 1

// for i in range(1, 5):
//     for j in range(i):
//         print(num, end=" ")
//         num += 1
//     print()
// Output:

// text
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 2. Right-triangle alphabet pattern
// python
// for i in range(1, 6):
//     for j in range(i):
//         print(chr(65 + j), end=" ")
//     print()
// Output:

// text
// A
// A B
// A B C
// A B C D
// A B C D E
// 3. Hollow right-triangle star pattern
// python
// n = 5

// for i in range(1, n + 1):
//     for j in range(1, i + 1):
//         if i == n or j == 1 or j == i:
//             print("*", end=" ")
//         else:
//             print(" ", end=" ")
//     print()
// Output:

// text
// *
// * *
// *   *
// *     *
// * * * * *
// 4. Reverse right-angle star pattern
// python
// n = 5

// for i in range(n, 0, -1):
//     for j in range(i):
//         print("*", end="")
//     print()
// Output:

// text
// *****
// ****
// ***
// **
// *
// 5. Reverse right-angle pattern with repeated row numbers
// python
// for i in range(5, 0, -1):
//     for j in range(i):
//         print(i, end=" ")
//     print()
// Output:

// text
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
// 6. Reverse right-angle number pattern
// python
// for i in range(5, 0, -1):
//     for j in range(1, i + 1):
//         print(j, end=" ")
//     print()
// Output:

// text
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 7. Reverse right-angle pattern of consecutive numbers
// python
// num = 15

// for i in range(5, 0, -1):
//     for j in range(i):
//         print(f"{num:2}", end=" ")
//         num -= 1
//     print()
// Output:

// text
// 15 14 13 12 11
// 10  9  8  7
//  6  5  4
//  3  2
//  1
// 8. Reverse right-angle hollow star pattern
// python
// n = 5

// for i in range(n, 0, -1):
//     for j in range(1, i + 1):
//         if i == n or j == 1 or j == i:
//             print("*", end=" ")
//         else:
//             print(" ", end=" ")
//     print()
// Output:

// text
// * * * * *
// *     *
// *   *
// * *
// *
// 9. 5×5 square with an empty main diagonal
// python
// n = 5

// for i in range(n):
//     for j in range(n):
//         if i == j:
//             print(" ", end=" ")
//         else:
//             print("*", end=" ")
//     print()
// Output:

// text
//   * * * *
// *   * * *
// * *   * *
// * * *   *
// * * * *  
// 10. Multiplication tables from 1 to 5, showing only even products
// python
// for i in range(1, 6):
//     for j in range(1, 11):
//         product = i * j
//         if product % 2 == 0:
//             print(f"{i} x {j} = {product}")
//     print()
// Each table starts on a new line. Odd products are skipped.

// 11. Matrix of absolute differences
// python
// n = int(input("Enter n: "))

// for i in range(n):
//     for j in range(n):
//         print(abs(i - j), end=" ")
//     print()
// Example for n = 4:

// text
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1
// 3 2 1 0
// 12. Unique pairs whose sum is a perfect square
// python
// for i in range(1, 11):
//     for j in range(i + 1, 11):
//         s = i + j

//         for k in range(1, s + 1):
//             if k * k == s:
//                 print(i, j)
//                 break
// Output:

// text
// 1 3
// 2 7
// 3 6
// 6 10
// 7 9
// 13. Diamond number pattern for n = 5
// python
// n = 5

// for i in range(1, n + 1):
//     for j in range(n - i):
//         print(" ", end="")

//     for j in range(1, i + 1):
//         print(j, end="")

//     for j in range(i - 1, 0, -1):
//         print(j, end="")

//     print()

// for i in range(n - 1, 0, -1):
//     for j in range(n - i):
//         print(" ", end="")

//     for j in range(1, i + 1):
//         print(j, end="")

//     for j in range(i - 1, 0, -1):
//         print(j, end="")

//     print()
// Output:

// text
//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1
// 14. 6×6 spiral matrix using nested loops
// python
// n = 6
// top = 0
// bottom = n - 1
// left = 0
// right = n - 1
// num = 1

// for layer in range((n + 1) // 2):
//     for j in range(left, right + 1):
//         print(num, end=" ")
//         num += 1
//     print()

//     for i in range(top + 1, bottom + 1):
//         print(num, end=" ")
//         num += 1
//     print()

//     for j in range(right - 1, left - 1, -1):
//         print(num, end=" ")
//         num += 1
//     print()

//     for i in range(bottom - 1, top, -1):
//         print(num, end=" ")
//         num += 1
//     print()

//     top += 1
//     bottom -= 1
//     left += 1
//     right -= 1
// Note: The spiral matrix requires storing values by position to produce the requested 6×6 arrangement. The above code prints the spiral traversal sequence in separate lines, not the requested matrix. Here is a correct version using a 2D list and nested loops:

// python
// n = 6
// a = [[0] * n for _ in range(n)]
// top, bottom = 0, n - 1
// left, right = 0, n - 1
// num = 1

// while top <= bottom and left <= right:
//     for j in range(left, right + 1):
//         a[top][j] = num
//         num += 1
//     top += 1

//     for i in range(top, bottom + 1):
//         a[i][right] = num
//         num += 1
//     right -= 1

//     if top <= bottom:
//         for j in range(right, left - 1, -1):
//             a[bottom][j] = num
//             num += 1
//         bottom -= 1

//     if left <= right:
//         for i in range(bottom, top - 1, -1):
//             a[i][left] = num
//             num += 1
//         left += 1

// for i in range(n):
//     for j in range(n):
//         print(f"{a[i][j]:2}", end=" ")
//     print()
// Output:

// text
//  1  2  3  4  5  6
// 20 21 22 23 24  7
// 19 32 33 34 25  8
// 18 31 36 35 26  9
// 17 30 29 28 27 10
// 16 15 14 13 12 11
// 15. Pascal's Triangle up to 8 rows
// python
// n = 8

// for i in range(n):
//     for j in range(n - i - 1):
//         print(" ", end=" ")

//     value = 1

//     for j in range(i + 1):
//         print(f"{value:4}", end="")
//         value = value * (i - j) // (j + 1)

//     print()
// Output (centered approximately):

// text
//               1
//             1   1
//           1   2   1
//         1   3   3   1
//       1   4   6   4   1
//     1   5  10  10   5   1
//   1   6  15  20  15   6   1
// 1   7  21  35  35  21   7   1
// 16. Matrix with border values, inner values, and divisibility rule
// Rules:

// Border cells contain 1.

// Inner cells contain 0.

// If the sum of the row and column indices is divisible by 3, the value becomes 2, overriding the other rules.

// python
// rows = int(input("Enter rows: "))
// cols = int(input("Enter columns: "))

// for i in range(rows):
//     for j in range(cols):
//         if (i + j) % 3 == 0:
//             print(2, end=" ")
//         elif i == 0 or i == rows - 1 or j == 0 or j == cols - 1:
//             print(1, end=" ")
//         else:
//             print(0, end=" ")
//     print()
// Example for rows = 4 and cols = 5:

// text
// 2 1 1 2 1
// 1 0 2 0 2
// 1 2 0 0 1
// 2 1 1 2 1



