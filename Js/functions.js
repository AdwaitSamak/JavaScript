// function myfunc(num1,num2){
//     console.log(num1+num2);
// }
// function myfunc2(num1,num2){
//     return (num1+num2);
// }

// const a=myfunc(1,2);  //wont store 3 as that function does not return anything
// console.log(a);  //will be undefined

// const b=myfunc2(1,2); //as it returns, b will store 3

// function userlogin(username="adwait"){   ///default in case no arg passed
//     return `${username} just logged in!!`
// }

// console.log(userlogin());
// console.log(userlogin("ayush"));

// function myfunc(...num1){    //rest operator takes all values as arguements
//     return num1;
// }
// console.log(myfunc(200,400,600,800));

const user={
    name:"adwait",
    age:21
}
function handleObject(obj){
    console.log(`Username is ${obj.name} and his age is ${obj.age}`);
}
handleObject(user)

//we can also directly pass object
handleObject({
    name:"adwait",
    age:21
})

const arr=[1,2,3,4]
function handleArray(newarr){
    return newarr[1]
}
console.log(handleArray(arr)); 
//can also directly pass array
