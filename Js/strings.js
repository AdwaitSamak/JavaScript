let name="Adwait"
const age=21
const ns=new String("AdwaitS");
console.log(`My name is ${name.toUpperCase()} and age is ${age} and ${ns}`);
let name2="    Adwait  "
let a =ns.charAt(2)
let b=ns.indexOf('w')
let c=ns.toUpperCase()
let d=ns.substring(0,4); //0,1,2,3 indexes
let e=ns.slice(-7,4); //piche se 4 indices
let f=name2.trim();  //trims spaces before and after
let g=ns.replace('Adw','Sam')
let h=ns.includes('Adw')

let str="Adwait Vinod Samak"
console.log(str.split(' '))  //converts to array when space occurs
console.table([a,b,c,d,name2,f,g,h]);