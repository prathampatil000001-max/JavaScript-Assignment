let fib_series="0 1";
let a=0;
let b=1;
for (let i=3; i<=20; i++){
    let c=a+b;
    fib_series+=c+" ";
    a=b
    b=c
};
console.log(fib_series)