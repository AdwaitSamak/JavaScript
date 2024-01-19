let myDate=new Date();  //object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
//month starts from 0
// let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

let newDate=new Date("2023-01-23");
// console.log(newDate.getTime());   //gets time in ms

// let newDate2=Date.now()
// console.log(newDate2);   //in milliseconds

console.log(newDate.toLocaleString('default',{
    weekday : "long"    //will write in long format
}));
