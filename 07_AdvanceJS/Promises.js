const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 1");
        resolve();
    }, 1000);
})

promiseOne.then(()=>{
    console.log("Async task 1 is resolved");
})


// or 

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async task 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // We can pass data in resolve. It can anything like object, array etc.
        resolve({usename: "chai", email: "chai@example.com"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = false;

        if(!error){
            resolve({username: "sagar", password: "12345"});
        }else{
            reject('Error: Something went wrong');
        }
    }, 1000);
})


// Promise chaining  
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
    // The returned value always goes to the next then().
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise either resolved or rejected"));



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "JavaScript", password: "12345"})
        }else{
            reject("JS went wrong");
        }
    }, 1000);
})


// Handling promise using async and await.
const consumePromiseFive = async () =>{

    // In async await we can't directly handle error for that we have to use try and catch methods.
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

consumePromiseFive();

// Getting users data using async and await.
// const getAllUsers = async ()=>{
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json(); // to convert api data to json format and it needs some time to do that so we have to do await here.
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();


// Getting users data using then(), catch() and finally().

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err) => console.log(err));