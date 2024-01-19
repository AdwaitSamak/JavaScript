const num=10
const newNum=new Number(10);  //defined as object

let a = num.toString();
let b=num.toFixed(2); //gets 2 precision values
let num2=10.1234566;
let c=num2.toPrecision(3); //gives precise value till first 3 values
let num3=1000000;
let d=num3.toLocaleString();   //us standards ke hisab se commas
let e=num3.toLocaleString('en-in');  //indian standards ke hisab se commas

console.table([a,b,c,d,e]);

//math

// Math.abs();
// Math.round()
// Math.ceil()
// .floor()
// .sqrt()
// .pow()
// .max()
// .random()  //always between 0 and 1
// .random()*10 //shifts one decimal to right
// .random()*10 +1 // ensuring min value 1

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);