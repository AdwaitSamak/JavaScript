// function createUser(username,isloggedin){
//     this.username=username;
//     this.isloggedin=isloggedin
//     return this;
// }

// const obj1=new createUser("Adwait",true);
// const obj2=new createUser("A",false);
// console.log(obj1);
// console.log(obj2);


//new creates new instance/object which is empty
//constructor function is called
//arguements are injected in the this keyword

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        console.log(`${this.password}abc`);
    }
    changeUsername(){
        console.log(`${this.username.toUpperCase()}`);
    }
}

const user1=new User('adwait','adwait@google.com','123')
console.log(user1.changeUsername());

