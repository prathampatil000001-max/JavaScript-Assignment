// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let row = '';   
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j + ' ';
//     }
//     console.log(row);
// }

// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
// // Output: 1 2 3 4
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
// // Output: 1 2 3 4for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
// // Output: 1 2 3 4
// for (let i = 1; i <= 20; i++) {
//   if (i === 13) {
//     console.log("Stopped at 13");
//     break;
//   }
//   console.log(i);
// }

for (let i = startingValue; i >= endingValue; i--) {
  // code
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}