// 03Subtract and Assign -=
// Start with the given value, then use -= to update it:

// 01 A water tank has 1,000 litres. 375 litres are used. Use -= to update the remaining water and print it.
//02  A student has 500 rupees. He spends 180 rupees. Use -= to update the remaining money and print it.
//03 A phone battery is at 90%. It uses 45% during the day. Use -= to update the battery percentage and print it.
//04 A warehouse has 2,400 boxes. 950 boxes are sent out. Use -= to update the remaining boxes and print it.
// //05  A game player has 2,000 points. He loses 625 points. Use -= to update the score and print it.


// # Problem 1: Update remaining water tank capacity
water_tank_litres = 1000
water_tank_litres -= 375
print("Remaining Water:", water_tank_litres, "litres")

// # Problem 2: Update student's remaining money
student_rupees = 500
student_rupees -= 180
print("Remaining Money: ₹", student_rupees, sep="")

// # Problem 3: Update phone battery percentage
battery_percentage = 90
battery_percentage -= 45
print("Remaining Battery:", battery_percentage, "%", sep="")

// # Problem 4: Update remaining warehouse boxes
warehouse_boxes = 2400
warehouse_boxes -= 950
print("Remaining Boxes:", warehouse_boxes)

// # Problem 5: Update game player score after loss
player_points = 2000
player_points -= 625
print("Updated Score:", player_points, "points")
