// 6. Exponentiation **
// Write a JavaScript program to solve each problem:

// Find the volume of a cube with a side length of 6 cm using side ** 3.
// Q01 A bacteria culture doubles every hour. Calculate the number of bacteria after 4 hours using exponentiation (start with 1 bacterium: 1 * 2 ** 4).
// Q02 Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.
// Q03 Find the value of ( 5^4 ) (5 raised to the power 4) using the exponentiation operator.
// Q04 A digital image has 1,024 pixels on each side (square image). Find the total number of pixels using pixels ** 2.
// # Problem 1: Volume of a cube
side_cube = 6
volume_cube = side_cube ** 3
print("Volume of the cube:", volume_cube, "cm³")

// # Problem 2: Bacteria growth after 4 hours
initial_bacteria = 1
hours = 4
total_bacteria = initial_bacteria * (2 ** hours)
print("Number of bacteria after 4 hours:", total_bacteria)

// # Problem 3: Total number of cells in a square arrangement
side_cells = 9
total_cells = side_cells ** 2
print("Total number of cells in the square arrangement:", total_cells)

// # Problem 4: Value of 5 raised to the power of 4
base = 5
exponent = 4
power_value = base ** exponent
print("Value of 5^4:", power_value)

// # Problem 5: Total number of pixels in a square digital image
pixels_side = 1024
total_pixels = pixels_side ** 2
print("Total number of pixels in the square image:", total_pixels)
