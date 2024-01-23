//immediately invoked function expressions

// ()()   first bracket is for func definition and second for call
// we use it to immediately invoke or call function
//ex used when we want to show DB connectivity, etc
//to reduce pollution caused by global variables

(()=>{
    console.log("DB connected");
})(); //semicolon needed to tell compiler where to end execution

((name)=>{
    console.log(`DB connected by ${name}`);
})("adwait")   //from here we pass arguements
