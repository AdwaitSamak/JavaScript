const obj=new Object() //singleton object
const obj2={} //non singleton object

obj.name="Adwait"
obj.email="adwait@gmail.com"
obj.age=21

// console.log(obj);

// const user={
//     location:"Pune",
//     fullname:{
//         firstname:"Adwait",
//         middlename:"Vinod",
//         lastname:"Samak"
//     }
// }
// console.log(user.fullname.firstname);

const user1={
    1:"a",
    2:"b"
}
const user2={
    3:"c",
    4:"d"
}

// const user3=Object.assign({},user1,user2);  //start with empty object, merges objects

// const user3={...user1,...user2};  //merge using spread operator
// console.log(user3)

// console.log(Object.keys(user1));  //returns keys in the object as array, same with values

// console.log(Object.entries(user1));  //returns key and values as array

// console.log(user1.hasOwnProperty('5'));   //returns if a key or value if present or not in the object

const course={
    instructor:"Adwait",
    age:21
}
// if we want ot access instructors value multiple times, then the usual syntax of course.instructor
//will be lengthy
//OBJECT Destructuring
const{instructor: ins}=course  //map instructor to ins and then use it directly without object name
console.log(ins);