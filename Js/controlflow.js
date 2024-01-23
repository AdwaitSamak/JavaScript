const temp = 41;
if (temp < 50) {
  console.log("temp less");
} else {
  console.log("temp more");
}

const userloggedinfromgoogle = true;
const userloggedinfromemail = true;

if (userloggedinfromemail || userloggedinfromgoogle)
  console.log("user logged in");

const month = 3;
switch (month) {
  case 1:
    console.log("Jan"); //if case matches, then all code below it is executed so we use break
    break;

  case 2:
    console.log("Feb");
    break;
}


let val1=5??10   //null coalescing operator, if null comes, it skips it
let val2=null??10   //null coalescing operator, if null comes, it skips it
console.log(val1);
console.log(val2);

const price=100
price>=80 ? console.log("true") : console.log("flase");   //ternary operator