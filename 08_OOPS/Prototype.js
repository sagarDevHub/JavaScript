// The goal is to create a function which trims the extra space and gives the length of the string.
// Without using trim and length functions.
// trueLength is function which we have to create.

// let myName = "Sagar      ";
// let myChanner = "Chai       ";

// console.log(myName.trueLength);



let myHeroes = ["Thor", "Batman"];

let heroPower = {
    Thor : "Lightning",
    Batman : "BatMobile",

    getThorPower : function(){
        console.log(`Thor power is ${this.Thor}`);
    }
}


// Creating a super power on Objects which can be accessible on any datatype like fuctions, object, array
Object.prototype.Sagar = function(){
    console.log(`Sagar is present in all objects`);
}

heroPower.Sagar();

myHeroes.Sagar();

// Creating a function which is only accessible to arrays.
Array.prototype.sayHello = function(){
    console.log("Sagar says hello");
}

myHeroes.sayHello();


// inheritence


// Old Syntax
const User = {
    name: "chai", 
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS assignment",

    // internally inheriting
    __proto__: TeachingSupport
}

// Externally inheriting
Teacher.__proto__ = User;


// Modern syntax to set inheritence
Object.setPrototypeOf(TeachingSupport, Teacher);


// solving the problem
let anotherUserName = "Sagar     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();

"Sagar".trueLength();
"iceTea".trueLength();