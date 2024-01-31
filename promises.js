// const promise1=new Promise((resolve,reject)=>{    //promise used to check if async taks is completed or not
//     setTimeout(()=>{            //async task
//         console.log("Async task completed");
//         resolve()
//     },1000)
// });
//   //resolve and reject are two parameters of the promise's callback function
// promise1.then(()=>{            //then has connection with resolve. it shows values after execution but for that the resolve method must be called 
//     console.log("Promise consumed");
// })

//WITHOUT USING VARIABLES
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()       //we can pass data in the resolve method, genrally objects
//     },1000)
// }).then(()=>{
//     console.log("Promise consumed 2");
// })


// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Adwait"})   //object passed
//     },1000)
// })

// promise3.then((user)=>{        //object taken as parameter

// })
//resolve me jo bhi parameter diya jayega wo then ke callback function ke parameter me mil jayega


// const promise4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error)        //if no error in task, we do resolve
//             resolve({username:"Adwait", email:"adwait@google.com"})
//         else 
//             reject('Something went wrong')    
//     },1000)
// })

// promise4.then((user)=>{        //object taken as parameter
//     return user.username           //this wont be returned direvcvtly, it will be obtained after chaining 
// }).then((username)=>{      //here we can get the returned username of the object
//     console.log(username);
// }).catch((error)=>{             //if any error occurs i.e reject is called
//     console.log("Error occured");
// }).finally(()=>{          //finally will always execute, it tells if the operation which had to occur has occured or not
//     console.log("Promise resolved or rejected");
// })

//PROMISE FUTURE ME HONE WALI CHIJ HAI
//NOT NECESSARY THAT WE HAVE TO HANDLE IT USING .THEN.CATCH
//WE CAN USE ASYNC AWAIT

// const promise5=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error)       
//             resolve({username:"Javascript", email:"js@google.com"})
//         else 
//             reject('Js went wrong')  
//     },1000)
// })

// async function consumepromise(){
//     try {                          //if no error sent by promise
//         const response=await promise5;
//         console.log(response);
//     } catch (error) {            //is error sent 
//         console.log(error);
//     } 
// }
// consumepromise()


// async function getUser(){
//     try {
//         const resp=await fetch('https://api.github.com/users/AdwaitSamak')
//         //jis chij ko time lagta hai usko await kr skte
//         //fetch returns a promise
//         const data=await resp.json();  //converts from string OBJECT to json OBJECT
//         //converting to json also takes time,  so we need to add await before it
//         //IMP TO CONVERT TO JSON OBJECT
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUser()


//FETCH USING THEN AND CATCH
fetch('https://api.github.com/users/AdwaitSamak').then((resp)=>{
    return resp.json()
}).then((respinjson)=>{
    console.log(respinjson.followers);
}).catch((error)=>{
    console.log("Not able to fetch");
}).finally(()=>{
    console.log("Fetched");
})