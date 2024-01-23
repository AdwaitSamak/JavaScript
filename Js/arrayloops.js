const arr=[1,2,3,4,5]
// for(let num of arr){    //gets values of array elements
//     console.log(num);
// }               //used in any iterable things-array, strings, etc

const map=new Map()
map.set('IN',"India")
map.set('BR',"Brazil")
map.set('FR',"France")

// console.log(map);

for(const [key,value] of map){     //we take two values to destructure it into array
    console.log(key);
    // console.log(value);
}

//for in     //indices ya keys uthata hai
//used on objects, arrays,,, not on maps
const myobj={
    game1:"nfs",
    game2:"cod",
    game3:"bgmi"
}

// for(const key in myobj){
//     console.log(`Key is ${key} and its value is ${myobj[key]}`);
// }


//FOR EACH

const arr2=[1,2,3,4,5,6]

// arr2.forEach( function(val){      //callback function needs to be passed so no name to the function      //val shows the values of all array elements
//     console.log(val);
// })

// arr2.forEach( (val)=> {          //use arrow function
//     console.log(val);
// })

// or
// arr2.forEach( (val)=> console.log(val))      //use arrow function

// function print(num){
//     console.log(num);
// }

// arr2.forEach(print)       //can also pass a function to for Each loop


arr2.forEach((el,ind,arr)=>{   // takes element, index and array as parameters
    console.log(el,ind,arr);
})


const arr3=[
    {
        langname:"JS",
        langfile:"JS"
    },
    {
        langname:"Java",
        langfile:"Java"
    },
    {
        langname:"Python",
        langfile:"Py"
    }
]

arr3.forEach((val,index)=>{
    console.log(`This is object at ${index} index, its lang name is ${val.langname} its file is ${val.langfile}`);
})