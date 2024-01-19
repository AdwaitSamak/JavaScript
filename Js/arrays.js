const arr=[1,2,3,4,5];

//methods
// .push(); //at back
// .pop(); //last val delete
// .unshift() //insert at start
// .shift() //delete from front
// .includes()  //is element preseent or not
// indexOf()  //returns index
// .join()  //converts to string

let newarr=arr.slice(1,3);  //only 1 and 2, does not change original array
let newarr2=arr.splice(1,3);  //1,2,3 index and removes those elements from og array
console.log(newarr);
console.log(newarr2);
console.log(arr);

//splice manipulates og array

