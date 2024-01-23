const user={
    name:"adwait",
    age:21,
    message:function(){
        console.log(`${this.name}, welcome to this website`);  //gives current context'
        console.log(this);   //gives current context(here object)
    }
}

// user.message()
// user.name="ayush";
// user.message()

console.log(this);  //gives empty context because we are using node but in console of the browser it will show window object as it is global object

//this only used in objects

const userdata =()=>{    //arrow function

}

const add=(num1,num2)=>{       //explicit return
    return num1+num2;
}

const sum=console.log(add(1,2));

const add2=(num1,num2)=> num1+num2;  //one liner implicit return functtion
// or const add2=(num1,num2)=> (num1+num2);  //one liner implicit return functtion

//if curly braces given then must mention return keyword, else no need


//if we want to return object we need to put curly braces for it
const mmm=(num1,num2)=> ({username:"adwait"})   //returns object