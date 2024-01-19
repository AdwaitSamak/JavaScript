const user={
    name:"Adwait",
    age:21,
    email:"adwait@gmail.com",
    isLoggedIn: false
}
// Object.freeze(user);  //cant change value now
// console.log(user.email);
// console.log(user["email"]);

user.greet=function(){
    console.log("Hello user");
}

user.greet()

user.greet2=function(){
    console.log(`Hello user, ${user.name}`);
}
user.greet2()