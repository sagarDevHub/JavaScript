// Immediately Invoked Function Expression

// Normal function -->

function name (){
    console.log("Hello");
}
name();


// IIFE function for immediate invokation
// syntax --> (()=> {}); / (()());

(function name(){
    console.log("Hello");
})();

// with parameter

((name) => {
    console.log(`Name is ${name}`);
})('sagar');
