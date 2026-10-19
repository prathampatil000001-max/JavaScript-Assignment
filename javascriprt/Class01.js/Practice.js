// let arr = [10,20,30];
// console.log(arr[1])

// let mat = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ];
// console.log(mat[1][1]);
// console.log(mat[2][2]);
// console.log(mat[2][0]);


// let arr = [10,20,30];
// let bag = ""
// for(let i=0; i<=arr.length-1; i++){
//     // console.log(arr[i])
//     bag+=arr[i]+" ";
// }
// console.log(bag)


// let mat = [
//     [10,20,30,55],
//     [40,50,60,68],
//     [70,80,90,91]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// console.log(rows,columns)


// let mat = [
//     [10,20,30,55],
//     [40,50,60,68],
//     [70,80,90,91]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// for(let i=0; i<rows; i++){
//     for (let j=0; j<columns; j++){
//         console.log(mat[i][j])
//     }
// }

// let mat = [
//     [10,20,30,55],
//     [40,50,60,68],
//     [70,80,90,91]
// ];
// let rows = mat.length;
// let columns = mat[0].length;
// let bag = ""
// for(let i=0; i<rows; i++){
//     for (let j=0; j<columns; j++){
//        bag+=mat[i][j]+" "
//     }
// }
// console.log(bag)

// for(let i=1;i<=5;i++){
//   let bag=" "
//   for(let j=1;j<=i;j++){
//     if(j==1||j==i||i==5){
//       bag +="* "
//     }else{
//       bag+=" "
//     }
//   }
//   console.log(bag)
// }
// let count = 5;
// while (count > 0) {
//   console.log(count);
//   count--;
// }

// let i = 1;
// while (i <= 5) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// let i = 5;

// while (i > 0) {
//     let j = 0;
//     let row = "";
//     while (j < i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i--;
// }

// let i=1
// while (i<=50){
//     console.log(i)
//     i++
// }


// let i=1324
// rev=0
// while(i>0){
//     let digit=i%10
//     i=Math.floor(i/10)
//     rev=rev*10+digit
// }
// console.log(rev)
// let i=11
// do{
//     console.log("hii")
//     i++
// }while(i<=10);


// let i=10;
// do{
// console.log(i);
// i --
// }while(i>=1);

// let num = 1234;
// let reverse = 0
// do{

// let last_digit = num%10;
// num = Math. floor(num/10);
// reverse = (reverse*10) + last_digit

// }while(num>0);
// console. log(reverse)

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);


// Do while ;
// similar to the while loop but exucutes ab block of code at lest one time ;
// do{
//     while (condition)
// }

// let i =15;
// do{
// console .log("Hellow ram ram bhai saryane !!! Sab raje kush hai jay mata dii sab logo ko hamare tare diwali ki shubkam naye happy diwali to all of you and wuith your family  ");
//  i++;
// }while(i<=10)
let i=10;
do{
    if(i%2==0){
        console.log(i)
    }i--;
}while(i<=1)

let num =1234;
do{
    let lastDigits=num%10;
    num=Math.floor(num/10);
    reverse=(reverse*10)+lastDigit
}while(num<10)