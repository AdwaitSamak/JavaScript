const arr=["Batman","Spiderman","Thor","Hulk","Ironman"]

// const ans=arr.forEach((val)=>{
//     console.log(val);
//     return val;
// })
// console.log(ans);

//for each does not return a value

const newarr=[1,2,3,4,5,6,7];
// const values = newarr.filter((num)=>num>4)   //gives new array satisfying the condition num>4
// console.log(values);


const books=[
    {
        title:"One", genre:"Fiction", publish:1990, edition:1990
    },
    {
        title:"Two", genre:"History", publish:2000, edition:2000
    },
    {
        title:"Three", genre:"Science", publish:2020, edition:2023
    },
    {
        title:"Four", genre:"Fiction", publish:2000, edition:2005
    }
]   //array of objects

// const val=books.filter( (obj) => obj.genre==="Fiction")   //obj is the values of the array element
// console.log(val);

const val2=books.filter((obj)=>obj.edition>=2000 && obj.genre==='Fiction')

// can also be written as the following using return keyword
// const val3=books.filter((obj)=>{
//     return obj.edition>=2000
// })
// console.log(val2);

const arr4=[1,2,3,4,5,6,7,8,9]
const newarr4=arr4.map((num)=>num+10)

// console.log(newarr4);

const newnum=arr4.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>70 && num<100)   //first multiplies ecah element by 10, then adds 1 and filters those values lying in the range\

// console.log(newnum);

//REDUCE
const mynums=[1,2,3,4,5]
const sum=mynums.reduce((acc,num)=>{
    console.log(`Acc: ${acc} and num:${num}`);
    return acc+num
},0)   //starting value of accumulator

console.log(sum);